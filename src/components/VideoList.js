import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const listOfVideos = props.videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div>{listOfVideos}</div>;
};

export default VideoList;
