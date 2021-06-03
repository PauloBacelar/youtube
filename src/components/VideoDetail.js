import React from "react";

const VideoDetail = (props) => {
  const videoSrc = props.video
    ? `https://www.youtube.com/embed/${props.video.id.videoId}`
    : null;

  return (
    <div>
      {props.video ? (
        <div>
          <div className="ui embed">
            <iframe src={videoSrc} />
          </div>

          <div className="ui segment">
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VideoDetail;
