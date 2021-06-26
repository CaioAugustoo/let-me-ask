import { useEffect } from "react";

export type HeadProps = {
  title: string;
};

export const Head = ({ title = "Home | Let me ask" }: HeadProps) => {
  useEffect(() => {
    document.title = title + " | Let me ask";
  }, [title]);

  return <></>;
};
