import styled, { css } from "styled-components";

import { SkeletonProps } from ".";
import { wavesKeyframes } from "./animation";

export const Wrapper = styled.div<SkeletonProps>`
  ${({ height, width, radius, direction, highlightSize }) => {
    return css`
      animation: ${wavesKeyframes};
      background: linear-gradient(
        ${direction}deg,
        var(--shimmer-bg) 0rem,
        var(--shimmer-color) 50%,
        var(--shimmer-bg) 100%
      );
      background-size: ${highlightSize}%;
      animation-duration: 5.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      border-radius: ${radius}px;
      height: ${height}px;
      width: ${width};
    `;
  }}
`;
