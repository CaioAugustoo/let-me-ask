import { createContext, useState, useEffect } from "react";

import { auth, firebase } from "services/firebase";

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type ContextProps = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export type UserContextProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as ContextProps);

export const UserStorage = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      const { displayName, photoURL, uid } = user!;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    });

    return () => unsubscribe();
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const response = await auth.signInWithPopup(provider);
      const { displayName, photoURL, uid } = response.user!;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    } catch (err) {
      console.log("Erro:", err);
    }
  }

  return (
    <UserContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};
