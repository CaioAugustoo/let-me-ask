import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const buttonModifiers = {
  outlined: () => css`
    background: #fff;
    border: 1px solid var(--brand-bg);
    color: var(--brand-bg);
  `,
};

export const Button = styled.button<Pick<ButtonProps, "isOutlined">>`
  ${({ isOutlined }) => css`
    height: 50px;
    border-radius: 8px;
    font-weight: var(--font-medium);
    background: var(--brand-bg);
    color: #fff;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    ${isOutlined && buttonModifiers.outlined()}

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    img {
      margin-right: 8px;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`;
