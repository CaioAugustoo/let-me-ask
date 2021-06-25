import { User } from "contexts/UserContext";
import { useState, useEffect } from "react";
import { database } from "services/firebase";

export type QuestionProps = {
  id: string;
  author: User;
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export type RoomDataProps = {
  title: string;
  authorId: string;
};

export type FirebaseQuestions = Record<string, QuestionProps>;

export const useRoom = (id: String) => {
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
  }, [id]);

  return {
    roomData,
    questions,
    isFetchingData,
  };
};
