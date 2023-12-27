import React from "react";

type Props = {
  date: string;
};

export const DateTime = ({ date }: Props) => <p className="date">{date}</p>;
