import React from "react";
import { List, VideoList } from "./copmonents";
import { list, videoList } from "./data";

import "./App.css";

const App = () => (
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

export default App;
