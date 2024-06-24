import React from "react";
import VideoItem from "./VideoItem";
import { Link } from "react-router-dom";

const VideoList = ({ videos, currentVideoID, setNowPlayingVideo }) => {
  return (
    <div className="videolist__container">
      <p className="videolist__heading">NEXT VIDEO</p>
      <ul id="videolist" className="videolist">
        {videos
          .filter((video) => video.id !== currentVideoID)
          .map((video) => (
            <li key={video.id}>
              <Link to={`/video/${video.id}`}>
                <VideoItem
                  id={video.id}
                  image={video.image}
                  title={video.title}
                  channel={video.channel}
                  setNowPlayingVideo={setNowPlayingVideo}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default VideoList;
