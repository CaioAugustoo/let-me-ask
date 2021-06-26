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

  img {
    max-width: 320px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Intro = styled.strong`
  font: 700 36px var(--font-secondary);
  line-height: 42px;
  margin-top: 16px;
`;

export const About = styled.p`
  font-size: 24px;
  color: var(--main);
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
    background: #fff;
    border: 1px solid var(--gray);
  }

  button {
    margin-top: 16px;
  }

  button,
  input {
    width: 100%;
  }
`;

export const CreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: var(--font-medium);
  background: var(--google-red);
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  img {
    margin-right: 8px;
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: var(--gray);

  margin: 32px 0;

  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--gray);
    margin-right: 16px;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--gray);
    margin-left: 16px;
  }
`;
