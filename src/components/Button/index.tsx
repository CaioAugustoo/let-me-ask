import React, { HTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  type: string;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ type, disabled, children, ...props }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} {...props}>
      {children}
    </S.Button>
  );
};
