import { useHistory, useParams } from "react-router-dom";

import brandLogo from "assets/images/logo.svg";
import { ReactComponent as DeleteImg } from "assets/images/delete.svg";

import { RoomTitleShimmer } from "shimmers/room";
import { QuestionShimmer } from "shimmers/question";

import Head from "components/Helper/Head";
import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";
import { Question } from "components/Question";

import { useRoom } from "hooks/useRoom";

import * as S from "./styles";
import { database } from "services/firebase";
import toast from "react-hot-toast";

export type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const { id } = useParams<RoomParams>();
  const { isFetchingData, questions, roomData } = useRoom(id);
  const { push } = useHistory();

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${id}/questions/${questionId}`).remove();
      toast("Pergunta excluída!", {
        icon: "🗑️",
      });
    }
  }

  async function handleEndRoom() {
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
              <Button type="button" isOutlined onClick={handleEndRoom}>
                Encerrar sala
              </Button>
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
                <Question key={question.id} {...question}>
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
