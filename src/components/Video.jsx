import React from "react";
import "./Video.css";
import turntable from "../assets/turntable.svg";

export default function Video(props) {
  /* 
        Must add "?autoplay=1" to end of url
        and "allow='autoplay'" attribute.
    */

  return (
    <div className="video-card">
      <iframe
        className="video"
        src={`https://www.youtube-nocookie.com/embed/${props.video.id}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        playsInline="1"
      ></iframe>
      <div className="video-info">
        <img src={turntable} className="video-info-left" />
        <div className="video-info-right">
          <div className="video-info-names">
            <h5 className="video-info-title">{props.video.title}</h5>
            <h6 className="video-info-uploader">{props.video.uploader}</h6>
          </div>
          <div className="video-info-stats">
            <h6 className="video-info-views">{props.video.view_count}</h6>
            <h6 className="video-info-date">{props.video.upload_date}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
