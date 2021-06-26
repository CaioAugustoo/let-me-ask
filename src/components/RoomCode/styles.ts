import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: transparent;
  border: 1px solid var(--brand-bg);
  color: var(--main-text);

  cursor: pointer;
  display: flex;

  > div {
    background: var(--brand-bg);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: var(--font-medium);
  }
`;
