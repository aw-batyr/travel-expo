import type { PropsWithChildren } from "react";

export const Marquee = ({ children }: PropsWithChildren) => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content">{children}</div>
      </div>
    </div>
  );
};
