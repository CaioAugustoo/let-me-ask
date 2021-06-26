import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 15px;

    @media (max-width: 1000px) {
      margin-right: auto;
    }
  }
`;
