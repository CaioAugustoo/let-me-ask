import { useHistory, useParams } from "react-router-dom";
import { database } from "services/firebase";

import brandLogo from "assets/images/logo.svg";
import { ReactComponent as DeleteImg } from "assets/images/delete.svg";
import { ReactComponent as CheckImg } from "assets/images/check.svg";
import { ReactComponent as AnswerImg } from "assets/images/answer.svg";

import { RoomTitleShimmer } from "shimmers/room";
import { QuestionShimmer } from "shimmers/question";

import Head from "components/Helper/Head";
import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";
import { Question } from "components/Question";

import { useRoom } from "hooks/useRoom";
import { useAuth } from "hooks/useAuth";

import * as S from "./styles";

import { deleteQuestionToast, isNotAdminToast } from "utils/toasts";

export type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const { id } = useParams<RoomParams>();
  const { user } = useAuth();
  const { isFetchingData, questions, roomData } = useRoom(id);
  const { push } = useHistory();

  const isAdmin = roomData?.authorId === user?.id;

  async function handleDeleteQuestion(questionId: string) {
    if (!isAdmin) {
      isNotAdminToast();
      return;
    }

    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${id}/questions/${questionId}`).remove();
      deleteQuestionToast();
    }
  }

  async function handleCheckQuestion(questionId: string) {
    if (!isAdmin) {
      isNotAdminToast();
      return;
    }

    await database.ref(`rooms/${id}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    if (!isAdmin) {
      isNotAdminToast();
      return;
    }

    await database.ref(`rooms/${id}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleEndRoom() {
    if (!isAdmin) {
      isNotAdminToast();
      return;
    }

    await database.ref(`rooms/${id}`).update({
      endedAt: new Date(),
    });
    push("/");
  }

  return (
    <>
      <Head title={`Sala #${id}`} />
      <S.Wrapper>
        <header>
          <S.Content>
            <img src={brandLogo} alt="Letmeask logo" />

            <div>
              <RoomCode code={id} />
              {roomData?.authorId === user?.id && (
                <Button type="button" isOutlined onClick={handleEndRoom}>
                  Encerrar sala
                </Button>
              )}
            </div>
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
                  {!question.isAnswered && (
                    <>
                      <button onClick={() => handleCheckQuestion(question.id)}>
                        <CheckImg />
                      </button>

                      <button
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <AnswerImg />
                      </button>
                    </>
                  )}

                  <button onClick={() => handleDeleteQuestion(question.id)}>
                    <DeleteImg />
                  </button>
                </Question>
              ))
            )}
          </S.QuestionList>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
