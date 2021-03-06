import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { database } from "services/firebase";

import homeIllustration from "assets/images/illustration.svg";
import brandLogo from "assets/images/logo.svg";

import { Button } from "components/Button";
import { Head } from "components/Helper/Head";

import { useAuth } from "hooks/useAuth";

import * as S from "./styles";

export const NewRoom = () => {
  const [newRoom, setNewRoom] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { push } = useHistory();

  async function createNewRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === "") return;
    setLoading(true);

    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    setLoading(false);
    push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <>
      <Head title="Criar uma nova sala" />
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
            <S.Form onSubmit={createNewRoom}>
              <input
                type="text"
                placeholder="Nome da sala"
                value={newRoom}
                onChange={({ target }) => setNewRoom(target.value)}
                maxLength={32}
              />
              <Button type="submit" disabled={newRoom.trim() === "" || loading}>
                {loading ? "Criando..." : "Criar sala"}
              </Button>
            </S.Form>
            <S.JoinRoom>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </S.JoinRoom>
          </S.Content>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
