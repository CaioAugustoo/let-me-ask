import * as S from "./styles";

export type SkeletonProps = {
  height: number | string;
  width?: number | string;
  color?: string;
  radius?: number;
  direction?: number;
  highlightSize?: number;
};

export const Shimmer = ({
  height,
  width = "100%",
  radius = 100,
  direction = 90,
  color = "#E3E3E3",
  highlightSize = 1000,
}: SkeletonProps) => {
  return (
    <S.Wrapper
      title="Loading data..."
      height={height}
      width={width}
      radius={radius}
      direction={direction}
      highlightSize={highlightSize}
      color={color}
    />
  );
};
