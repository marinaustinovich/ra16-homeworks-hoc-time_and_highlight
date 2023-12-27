import React from "react";
import { Video, VideoData } from "../Video";

type Props = {
  list: VideoData[];
};

export const VideoList = ({ list }: Props) =>
  list.map((video, index) => (
    <Video
      key={index}
      title={index.toString()}
      url={video.url}
      date={video.date}
    />
  ));
