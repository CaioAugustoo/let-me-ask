import * as S from "./styles";

export type SkeletonProps = {
  height: number | string;
  width?: number | string;
  color?: string;
  radius?: number;
  direction?: number;
  highlightSize?: number;
  highlightColor?: string;
};

export const Shimmer = ({
  height,
  width = "100%",
  radius = 0,
  direction = 90,
  color = "#E3E3E3",
  highlightSize = 1000,
  highlightColor = "#fff",
}: SkeletonProps) => {
  return (
    <S.Wrapper
      title="Loading data..."
      height={height}
      width={width}
      radius={radius}
      direction={direction}
      highlightSize={highlightSize}
      highlightColor={highlightColor}
      color={color}
    />
  );
};
