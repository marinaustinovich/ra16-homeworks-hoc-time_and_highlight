import React from "react";
import { DateTimePretty } from "../DateTimePretty";

export type VideoData = {
    url: string;
    date: string;
  };
  

type VideoProps = {
  title: string;
  url: string;
  date: string;
}

export const Video = ({ title, url, date }: VideoProps) => (
  <div className="video">
    <iframe
      title={title}
      src={url}
      style={{ border: 'none' }}
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
    <DateTimePretty date={date} />
  </div>
);
