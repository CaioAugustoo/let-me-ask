import { FormEvent, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { database } from "services/firebase";

import brandLogo from "assets/images/logo.svg";
import { ReactComponent as LikeImg } from "assets/images/like.svg";

import { RoomTitleShimmer, UserInfoShimmer } from "shimmers/room";
import { QuestionShimmer } from "shimmers/question";

import Head from "components/Helper/Head";
import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";
import { Question } from "components/Question";

import { useAuth } from "hooks/useAuth";
import { useRoom } from "hooks/useRoom";

import * as S from "./styles";
import { isNotAuthenticatedToast, questionSentToast } from "utils/toasts";

export type RoomParams = {
  id: string;
};

export const Room = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { id } = useParams<RoomParams>();
  const { isFetchingData, questions, roomData } = useRoom(id);

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if (newQuestion.trim() === "") return;
    if (!user) isNotAuthenticatedToast();

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
    questionSentToast();

    setLoading(false);
    setNewQuestion("");
  }

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${id}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${id}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <>
      <Head title={`Sala ${roomData?.title}`} />
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
              disabled={!user}
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
                      Para enviar uma pergunta,{" "}
                      <Link to="/">
                        <button>faça seu login</button>
                      </Link>
                      .
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

          <S.QuestionList>
            {isFetchingData ? (
              <QuestionShimmer />
            ) : (
              questions.map(question => (
                <Question
                  key={question.id}
                  {...question}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  <S.LikeButton
                    disabled={!user}
                    className={question.likeId ? "liked" : ""}
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      handleLikeQuestion(question.id, question.likeId)
                    }
                  >
                    {question.likeCount > 0 && (
                      <span>{question.likeCount}</span>
                    )}

                    <LikeImg />
                  </S.LikeButton>
                </Question>
              ))
            )}
          </S.QuestionList>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
