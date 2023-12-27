
import React from "react";
import { withWrapper } from "../../hoc";
import { VideoBlock } from "../VideoBlock";
import { Popular } from "../Popular";
import { New } from "../New";
import { Article } from "../Article";

type VideoItem = {
  type: "video";
  views: number;
  url: string;
};

type ArticleItem = {
  type: "article";
  views: number;
  title: string;
};

type ListProps = {
  list: VideoItem[] | ArticleItem[];
};

export const List = ({ list }: ListProps) =>
  list.map((item, index) => {
    switch (item.type) {
      case "video":
        const VideoBlockWithWrapper =
          item.views > 1000
            ? withWrapper(VideoBlock, Popular)
            : item.views < 100
            ? withWrapper(VideoBlock, New)
            : VideoBlock;
        return (
          <VideoBlockWithWrapper
            key={index}
            {...item}
            title={index.toString()}
          />
        );

      case "article":
        const ArticleWithWrapper =
          item.views > 1000
            ? withWrapper(Article, Popular)
            : item.views < 50
            ? withWrapper(Article, New)
            : Article;
        return <ArticleWithWrapper key={index} {...item} />;

      default:
        return null;
    }
  });
