import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 15px;
  }
`;
