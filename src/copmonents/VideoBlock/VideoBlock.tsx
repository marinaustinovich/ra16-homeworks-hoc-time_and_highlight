import React from "react";

type VideoBlockProps = {
  title: string;
  url: string;
  views: number;
};

export const VideoBlock = ({ title, url, views }: VideoBlockProps) => (
  <div className="item item-video">
    <iframe
      title={title}
      src={url}
      style={{ border: 'none' }}
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
    <p className="views">Просмотров: {views}</p>
  </div>
);
