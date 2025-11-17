import type { PropsWithChildren } from "react";

export const Marquee = ({ children }: PropsWithChildren) => {
  return (
    <div className="marquee-wrapper">
      {/* Первый слой */}
      <div className="marquee">
        {children}
        {children}
        {children}
      </div>

      {/* Второй слой — бесконечный догоняющий */}
      <div className="marquee2">
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};
