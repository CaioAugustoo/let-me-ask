import styled from "styled-components";

export const Wrapper = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid var(--borders);
  }
`;

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  > img {
    max-height: 45px;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    button {
      height: 40px;
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 0 30px;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const RoomTitle = styled.div`
  margin: 32px 0px 24px;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: space-between;
  }

  h1 {
    font-family: var(--font-secondary);
    font-size: 24px;
    color: var(--main-text);
  }

  span {
    margin-left: 16px;
    background: var(--auth-link);
    border-radius: 100px;
    padding: 8px 16px;
    color: #fff;
    font-weight: var(--font-medium);
    font-size: 14px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: var(--secondary-text);
    font-weight: var(--font-medium);

    button {
      background: transparent;
      border: 0;
      color: var(--brand-bg);
      text-decoration: underline;
      font-size: 14px;
      font-weight: var(--font-medium);
      cursor: pointer;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 10px;
    color: var(--main-text);
    font-weight: var(--font-medium);
    font-size: 14px;
  }
`;
