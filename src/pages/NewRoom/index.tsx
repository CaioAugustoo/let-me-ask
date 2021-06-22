import homeIllustration from "assets/images/illustration.svg";
import brandLogo from "assets/images/logo.svg";

import * as S from "./styles";
import { Button } from "components/Button";
import { Link } from "react-router-dom";

export const NewRoom = () => {
  return (
    <S.Wrapper>
      <S.Aside>
        <img
          src={homeIllustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <S.Intro>Crie salas de Q&amp;A ao-vivo</S.Intro>
        <S.About>Tire as dúvidas da sua audiência em tempo-real</S.About>
      </S.Aside>

      <S.Main>
        <S.Content>
          <img src={brandLogo} alt="Letmeask logo" />
          <S.CreateRoom>Criar uma nova sala</S.CreateRoom>

          <S.Form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </S.Form>
          <S.JoinRoom>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </S.JoinRoom>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
};
