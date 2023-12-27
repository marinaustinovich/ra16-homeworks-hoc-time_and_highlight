import React from "react";

type ArticleProps = {
  views: number;
  title: string;
};

export const Article = ({ views, title }: ArticleProps) => (
  <div className="item item-article">
    <h3>
      <a href="/">{title}</a>
    </h3>
    <p className="views">Прочтений: {views}</p>
  </div>
);
