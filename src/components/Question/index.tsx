import { User } from "contexts/UserContext";
import * as S from "./styles";

export type QuestionProps = {
  content: string;
  author: User;
  children?: React.ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Question = ({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) => {
  return (
    <S.Wrapper isAnswered={isAnswered} isHighlighted={isHighlighted}>
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
