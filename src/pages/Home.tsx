import homeIllustration from "assets/images/illustration.svg";
import brandLogo from "assets/images/logo.svg";
import googleIcon from "assets/images/google-icon.svg";

import * as S from "./styles";
import { Button } from "components/Button";

export const Home = () => {
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
          <S.CreateRoom>
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </S.CreateRoom>

          <S.Separator>ou entre em uma sala</S.Separator>
          <S.Form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
};
