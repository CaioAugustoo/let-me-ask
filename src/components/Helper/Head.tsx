import { useEffect } from "react";

export type HeadProps = {
  title: string;
};

const Head = ({ title }: HeadProps) => {
  useEffect(() => {
    document.title = title + " | Let me ask";
  }, [title]);

  return <></>;
};

export default Head;
