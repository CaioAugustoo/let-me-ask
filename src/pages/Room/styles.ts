import styled from "styled-components";

export const Wrapper = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }
`;

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  form textarea {
    width: 100% !important;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px !important;
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0px 24px;
  display: flex;
  align-items: center;

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

  span {
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
