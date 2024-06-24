import React from 'react';

function VideoItem(props) {
    return (
      <div className="videolist__item">
        <img className="videolist__image" src={props.image} alt="video poster image"/>
          <div className="videolist__group">
            <p className="videolist__title">{props.title}</p>
            <p className="videolist__channelname">{props.channel}</p>    
          </div>             
    </div>
    )
}

export default VideoItem;
