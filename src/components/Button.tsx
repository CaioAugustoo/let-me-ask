import React, { HTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  type: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ type, children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
