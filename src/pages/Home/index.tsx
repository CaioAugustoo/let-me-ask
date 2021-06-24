import { useHistory } from "react-router";

import homeIllustration from "assets/images/illustration.svg";
import brandLogo from "assets/images/logo.svg";
import googleIcon from "assets/images/google-icon.svg";

import { Button } from "components/Button";

import * as S from "./styles";

import { useAuth } from "hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "services/firebase";

export const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const { user, signInWithGoogle } = useAuth();
  const { push } = useHistory();

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    push("/rooms/new");
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room doesn't exists.");
      return;
    }

    push(`/rooms/${roomCode}`);
  }

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
          <S.CreateRoom onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </S.CreateRoom>

          <S.Separator>ou entre em uma sala</S.Separator>
          <S.Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={({ target }) => setRoomCode(target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
};
