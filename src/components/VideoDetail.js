import React from "react";

const VideoDetail = (props) => {
  return <div>{props.video ? props.video.snippet.title : null}</div>;
};

export default VideoDetail;
