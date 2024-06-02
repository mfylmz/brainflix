import React from 'react';

function VideoItem(props) {
    return (
      <li 
      onClick={() => {
        props.setNowPlayingVideo(props.id);
      }}
      className="videolist__item">
        <img className="videolist__image" src={props.image} alt="video poster image"/>
          <div className="videolist__group">
            <p className="videolist__title">{props.title}</p>
            <p className="videolist__channelname">{props.channel}</p>    
          </div>             
    </li>
    )
}

export default VideoItem;
