import styled, { css } from "styled-components";

import { SkeletonProps } from ".";
import { wavesKeyframes } from "./animation";

export const Wrapper = styled.div<SkeletonProps>`
  ${({
    height,
    width,
    color,
    radius,
    direction,
    highlightColor,
    highlightSize,
  }) => {
    return css`
      animation: ${wavesKeyframes};
      background: linear-gradient(
        ${direction}deg,
        ${color} 0rem,
        ${highlightColor} 50%,
        ${color} 100%
      );
      background-size: ${highlightSize}%;
      animation-duration: 5.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      border-radius: ${radius}px;
      height: ${height}px;
      width: ${width}px;
    `;
  }}
`;
