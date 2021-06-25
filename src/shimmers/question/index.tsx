import { Shimmer } from "shimmers";
import * as S from "./styles";

export const QuestionShimmer = () => {
  return (
    <S.Wrapper>
      <Shimmer height={120} radius={10} />
      <Shimmer height={120} radius={10} />
      <Shimmer height={120} radius={10} />
    </S.Wrapper>
  );
};
