import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  return (
    <div
      className="video-item item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img
        src={props.video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={props.video.snippet.title}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
