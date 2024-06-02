import React from 'react';
import VideoItem from './VideoItem';

function VideoList(props) {
    return (
        <div className="videolist__container">
            <p className="videolist__heading">NEXT VIDEO</p>
            <ul id="videolist" className= "videolist">
                {props.videos
                .filter((video) => video.id !== props.currentVideoID)
                .map((video) => (  
                    <div key={video.id}>             
                        <VideoItem 
                        id = {video.id}
                        temp={video.id}
                        image={video.image} 
                        title={video.title} 
                        channel={video.channel}
                        videos={props.videos}
                        setNowPlayingVideo={props.setNowPlayingVideo}/>  
                    </div>             
                ))}
            </ul>
        </div>        
        
    )
}

export default VideoList;
