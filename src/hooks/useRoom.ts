import { User } from "contexts/UserContext";
import { useState, useEffect } from "react";
import { database } from "services/firebase";
import { useAuth } from "./useAuth";

export type FirebaseQuestions = Record<
  string,
  {
    author: User;
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
    hasLiked: boolean;
  }
>;
export type QuestionProps = {
  id: string;
  author: User;
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

export type RoomDataProps = {
  title: string;
  authorId: string;
};

export const useRoom = (id: String) => {
  const { user } = useAuth();
  const [roomData, setRoomData] = useState<RoomDataProps>();
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);
    const roomRef = database.ref(`/rooms/${id}`);

    roomRef.on("value", room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([_, like]) => like.authorId === user?.id
            )?.[0],
          };
        }
      );
      setRoomData({
        title: databaseRoom.title,
        authorId: databaseRoom.authorId,
      });

      setQuestions(parsedQuestions.sort((a, b) => (a.id < b.id ? 1 : -1)));

      setIsFetchingData(false);
    });

    return () => roomRef.off("value");
  }, [id, user?.id]);

  return {
    roomData,
    questions,
    isFetchingData,
  };
};
