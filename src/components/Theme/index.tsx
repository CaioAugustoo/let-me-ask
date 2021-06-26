import { useTheme } from "hooks/useTheme";
import * as S from "./styles";

export const ThemeButton = () => {
  const { changeTheme } = useTheme();

  return (
    <S.Wrapper>
      <button onClick={changeTheme}>MUDAR TEMA</button>
    </S.Wrapper>
  );
};
