import { Shimmer } from "shimmers";
import * as S from "./styles";

export const RoomTitleShimmer = () => {
  return (
    <S.Wrapper>
      <Shimmer height={37} width="150px" />
      <Shimmer height={37} width="100px" />
    </S.Wrapper>
  );
};

export const UserInfoShimmer = () => {
  return (
    <S.Wrapper>
      <Shimmer height={32} width="32px" />
      <Shimmer height={25} width="100px" />
    </S.Wrapper>
  );
};
