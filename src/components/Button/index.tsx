import React, { HTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  type: string;
  disabled?: boolean;
  isOutlined?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  type,
  isOutlined = false,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button disabled={disabled} isOutlined={isOutlined} {...props}>
      {children}
    </S.Button>
  );
};
