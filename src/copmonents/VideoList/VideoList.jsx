import React from 'react';
import Video from '../Video/Video';

export default function VideoList(props) {
    return props.list.map((item, index) => <Video key={index} title={index} url={item.url} date={item.date} />);
}

