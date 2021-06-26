import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;
  background: var(--brand-bg);
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  @media (max-width: 1000px) {
    display: none;
  }

  img {
    max-width: 320px;
  }
`;

export const Intro = styled.strong`
  font: 700 36px var(--font-secondary);
  line-height: 42px;
  margin-top: 16px;
`;

export const About = styled.p`
  font-size: 24px;
  color: #fff;
  line-height: 32px;

  margin-top: 16px;
`;

export const Main = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 32px;
`;

export const Content = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  width: 100%;
  max-width: 320px;

  text-align: center;

  > img {
    align-self: center;
  }
`;

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: var(--input);
    border: 1px solid var(--borders);
    color: var(--main-text);
  }

  button {
    margin-top: 16px;
  }

  button,
  input {
    width: 100%;
  }
`;

export const JoinRoom = styled.p`
  font-size: 14px;
  color: var(--new-room-link);
  margin-top: 16px;

  a {
    color: var(--auth-link);
  }
`;

export const CreateRoom = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px;
  font-family: var(--font-secondary);
`;
