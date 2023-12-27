import React, { ReactNode } from "react";

type PopularProps = {
  children: ReactNode;
}

export const Popular = ({ children }: PopularProps) => (
  <div className="wrap-item wrap-item-popular">
    <span className="label">Popular!</span>
    {children}
  </div>
);
