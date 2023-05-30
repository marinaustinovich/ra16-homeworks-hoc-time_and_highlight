import React from 'react';
import Article from '../Article/Article';
import VideoBlock from '../VideoBlock/VideoBlock';
import Popular from '../Popular/Popular';
import New from '../New/New';
import withWrapper from '../../hoc/withWrapper';

export default function List(props) {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                const VideoBlockWithWrapper = item.views > 1000 ? withWrapper(VideoBlock, Popular) : item.views < 50 ? withWrapper(VideoBlock, New) : VideoBlock;
                return <VideoBlockWithWrapper key={index} {...item} title={index}/>;

            case 'article':
                const ArticleWithWrapper = item.views > 1000 ? withWrapper(Article, Popular) : item.views < 50 ? withWrapper(Article, New) : Article;
                return <ArticleWithWrapper key={index} {...item} />;
    
            default:
                break;
        }
    });
};

