import { User } from "contexts/UserContext";
import * as S from "./styles";

export type QuestionProps = {
  content: string;
  author: User;
};

export const Question = ({ content, author }: QuestionProps) => {
  return (
    <S.Wrapper>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </S.UserInfo>
        <div></div>
      </S.Footer>
    </S.Wrapper>
  );
};
