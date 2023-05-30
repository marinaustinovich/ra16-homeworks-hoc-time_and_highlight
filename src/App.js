import React, {useState} from 'react';
import './App.css';
import VideoList from './copmonents/VideoList/VideoList';
import List from './copmonents/List/List';

function App() {
  const [videoList, setVideoList] = useState([
    {
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-05-30 14:24:00'
    },
    {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-05-30 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-05-29 23:16:00'
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-05-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-04-01 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-01-02 05:24:00'
    },
  ]);

  const [list, setList] = useState([
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        views: 50
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        views: 12
    },
    {
        type: 'article',
        title: 'Невероятные события в неизвестном поселке...',
        views: 175
    },
    {
        type: 'article',
        title: 'Секретные данные были раскрыты!',
        views: 1532
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        views: 4253
    },
    {
        type: 'article',
        title: 'Кот Бегемот обладает невероятной...',
        views: 12,
    },
]);

  return (
      <>
        <h2>Task #1 Time</h2>
        <div className="container">
          <VideoList list={videoList} />
        </div>
        
        <h2>Task #2 Highlight</h2>
        <div className="container">
          <List list={list} />
        </div>
      </>
  );
}

export default App;
