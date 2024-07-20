import React from 'react';

function VideoPlayer(props) {
    return (
        <section className="site-video"> 
            <video className="site-video__video" controls poster={props.posterImage.image}>Sorry, your browser doesn't support embedded videos!</video>
        </section>
    )
}

export default VideoPlayer;
