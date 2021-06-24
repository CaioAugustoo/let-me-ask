import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "services/firebase";
import toast from "react-hot-toast";

import brandLogo from "assets/images/logo.svg";

import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";

import { useAuth } from "hooks/useAuth";

import * as S from "./styles";

export type RoomParams = {
  id: string;
};

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { id } = useParams<RoomParams>();

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      toast.error("You must be logged in to send a new question.");
    }

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
      icon: "👌",
    });
    setLoading(false);
    setNewQuestion("");
  }

  return (
    <S.Wrapper>
      <header>
        <S.Content>
          <img src={brandLogo} alt="Letmeask logo" />
          <RoomCode code={id} />
        </S.Content>
      </header>

      <S.Main>
        <S.RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </S.RoomTitle>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={({ target }) => setNewQuestion(target.value)}
          />

          <S.FormFooter>
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
            <Button
              type="submit"
              disabled={!user || loading || newQuestion.trim() === ""}
            >
              {loading ? "Enviando..." : "Enviar pergunta"}
            </Button>
          </S.FormFooter>
        </form>
      </S.Main>
    </S.Wrapper>
  );
};
