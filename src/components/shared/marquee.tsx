import type { PropsWithChildren } from "react";

export const Marquee = ({ children }: PropsWithChildren) => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </div>
      <div className="marquee2">
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};
