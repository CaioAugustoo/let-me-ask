import styled, { css } from "styled-components";

import { SkeletonProps } from ".";
import { wavesKeyframes } from "./animation";

const skeletonHeight = (height: number | string) => {
  if (typeof height === "number") {
    height = `${height}px`;

    return css`
      height: ${height};
    `;
  } else {
    height = `${height}`;

    return css`
      height: ${height};
    `;
  }
};

const skeletonWidth = (width: number | string) => {
  if (typeof width === "number") {
    width = `${width}px`;

    return css`
      width: ${width};
    `;
  } else {
    width = `${width}`;

    return css`
      width: ${width};
    `;
  }
};

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
      ${skeletonWidth(width!)};
      ${skeletonHeight(height!)};
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
    `;
  }}
`;
