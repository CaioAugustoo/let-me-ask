import * as S from "./styles";
import copyImage from "assets/images/copy.svg";

import { copyToClipboard } from "utils/copyClipboard";

export type RoomCodeProps = {
  code: string;
};

export const RoomCode = ({ code }: RoomCodeProps) => {
  return (
    <S.Button onClick={() => copyToClipboard(code)}>
      <div>
        <img src={copyImage} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </S.Button>
  );
};
