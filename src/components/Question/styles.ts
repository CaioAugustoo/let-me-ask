import { LikeButton } from "pages/Room/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin: 8px auto;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
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
    margin-left: 10px;
    color: var(--secondary-text);
    font-size: 14px;
  }
`;
