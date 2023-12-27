import React, { ReactNode } from "react";

type NewProps = {
  children: ReactNode;
};

export const New = ({ children }: NewProps) => (
  <div className="wrap-item wrap-item-new">
    <span className="label">New!</span>
    {children}
  </div>
);
