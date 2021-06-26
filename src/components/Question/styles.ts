import { LikeButton } from "pages/Room/styles";
import { QuestionProps } from ".";
import styled, { css } from "styled-components";

export type WrapperProps = Pick<QuestionProps, "isAnswered" | "isHighlighted">;

const wrapperModifiers = {
  default: () => css`
    background: var(--question);
    border: 1px solid transparent;
  `,
  isAnswered: () => css`
    background: var(--question-answered);
    border: 1px solid transparent;
  `,
  isHighlighted: () => css`
    background: var(--question-highlighted);
    border: 1px solid var(--brand-bg);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isAnswered, isHighlighted }) => css`
    ${isHighlighted && !isAnswered
      ? wrapperModifiers.isHighlighted()
      : wrapperModifiers.isAnswered()}
    ${!isAnswered && !isHighlighted && wrapperModifiers.default()}

    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    margin: 8px auto;

    @media (max-width: 1000px) {
      padding: 20px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    div {
      display: flex;
      gap: 10px;
    }

    ${LikeButton} {
      display: flex;
      align-items: flex-end;
      color: var(--secondary-text);
      gap: 8px;
      transition: filter 0.2s;

      &.liked {
        color: var(--brand-bg);

        svg path {
          stroke: var(--brand-bg);
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`;

export const Content = styled.p`
  color: var(--main-text);
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
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
    color: var(--secondary-text);
    font-size: 14px;
  }
`;
