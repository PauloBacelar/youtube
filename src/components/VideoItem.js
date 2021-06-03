import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  console.log(props);
  return (
    <div className="video-item item">
      <img src={props.video.snippet.thumbnails.medium.url} class="ui image" />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
