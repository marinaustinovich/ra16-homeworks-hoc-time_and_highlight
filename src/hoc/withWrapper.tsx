import React, { ComponentType, ReactNode } from "react";

export const withWrapper =
  <P extends object>(
    WrappedComponent: ComponentType<P>,
    WrapperComponent: ComponentType<{ children: ReactNode }>
  ) =>
  (props: P) =>
    (
      <WrapperComponent>
        <WrappedComponent {...props} />
      </WrapperComponent>
    );
