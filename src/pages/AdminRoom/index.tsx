import { useParams } from "react-router-dom";

import brandLogo from "assets/images/logo.svg";

import { RoomTitleShimmer } from "shimmers/room";
import { QuestionShimmer } from "shimmers/question";

import Head from "components/Helper/Head";
import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";
import { Question } from "components/Question";

import { useRoom } from "hooks/useRoom";

import * as S from "./styles";

export type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const { id } = useParams<RoomParams>();
  const { isFetchingData, questions, roomData } = useRoom(id);

  return (
    <>
      <Head title={`Sala #${id}`} />
      <S.Wrapper>
        <header>
          <S.Content>
            <img src={brandLogo} alt="Letmeask logo" />

            <div>
              <RoomCode code={id} />
              <Button type="button" isOutlined>
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
                <Question key={question.id} {...question} />
              ))
            )}
          </S.QuestionList>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
