import * as S from "./styles";

import brandLogo from "assets/images/logo.svg";

import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";
import { useParams } from "react-router-dom";

export type RoomParams = {
  id: string;
};

export const Room = () => {
  const { id } = useParams<RoomParams>();

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

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <S.FormFooter>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </S.FormFooter>
        </form>
      </S.Main>
    </S.Wrapper>
  );
};
