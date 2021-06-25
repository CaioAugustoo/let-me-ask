import { User } from "contexts/UserContext";
import * as S from "./styles";

export type QuestionProps = {
  content: string;
  author: User;
  children?: React.ReactNode;
};

export const Question = ({ content, author, children }: QuestionProps) => {
  return (
    <S.Wrapper>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </S.UserInfo>
        <div>{children}</div>
      </S.Footer>
    </S.Wrapper>
  );
};
