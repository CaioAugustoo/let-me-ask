import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "services/firebase";
import { User } from "contexts/UserContext";
import toast from "react-hot-toast";

import brandLogo from "assets/images/logo.svg";

import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";

import { useAuth } from "hooks/useAuth";

import * as S from "./styles";

import { RoomTitleShimmer, UserInfoShimmer } from "shimmers/room";
import Head from "components/Helper/Head";

export type Question = {
  author: User;
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export type FirebaseQuestions = Record<string, Question>;

export type RoomParams = {
  id: string;
};

export type RoomDataProps = {
  title: string;
  authorId: string;
};

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [roomData, setRoomData] = useState<RoomDataProps>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const { user } = useAuth();
  const { id } = useParams<RoomParams>();

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
      setQuestions(parsedQuestions);
      setIsFetchingData(false);
    });
  }, [id]);

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if (newQuestion.trim() === "") return;
    if (!user) toast.error("You must be logged in to send a new question.");

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
        authorId: user?.id,
      },
      isHighlighted: false,
      isAnswered: false,
    };
    setLoading(true);

    await database.ref(`/rooms/${id}/questions`).push(question);
    toast.success("Your question has been sent!", {
      icon: "🥳",
    });

    setLoading(false);
    setNewQuestion("");
  }

  return (
    <>
      <Head title={`Sala #${id}`} />
      <S.Wrapper>
        <header>
          <S.Content>
            <img src={brandLogo} alt="Letmeask logo" />
            <RoomCode code={id} />
          </S.Content>
        </header>

        <S.Main>
          <S.RoomTitle>
            {isFetchingData ? (
              <RoomTitleShimmer />
            ) : (
              <>
                <h1>{roomData?.title}</h1>
                <span>{questions.length} pergunta(s)</span>
              </>
            )}
          </S.RoomTitle>

          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="O que você quer perguntar?"
              value={newQuestion}
              onChange={({ target }) => setNewQuestion(target.value)}
            />

            <S.FormFooter>
              {isFetchingData ? (
                <UserInfoShimmer />
              ) : (
                <>
                  {!user ? (
                    <span>
                      Para enviar uma pergunta, <button>faça seu login</button>.
                    </span>
                  ) : (
                    <S.UserInfo>
                      <img src={user.avatar} alt={user.name} />
                      <span>{user.name}</span>
                    </S.UserInfo>
                  )}
                </>
              )}

              <Button
                type="submit"
                disabled={!user || loading || newQuestion.trim() === ""}
              >
                {loading ? "Enviando..." : "Enviar pergunta"}
              </Button>
            </S.FormFooter>
          </form>

          <div>
            {questions.map(question => (
              <p>{question.content}</p>
            ))}
          </div>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
