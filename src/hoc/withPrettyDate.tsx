import React, { ComponentType } from "react";

type FormatFunction = (date: string) => string;

export const withPrettyDate = <P extends { date: string }>(
  Component: ComponentType<P>,
  formatFunction: FormatFunction
) => {
  const WithPrettyDate: React.FC<P> = (props) => (
    <Component {...props} date={formatFunction(props.date)} />
  );

  return WithPrettyDate;
};
