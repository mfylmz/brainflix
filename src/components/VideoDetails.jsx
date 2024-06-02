import React from 'react';
import Likes from './Likes';
import TimeStamp from './TimeStamp';
import Views from './Views';

function VideoDetails(props) {
    return (
        <article className="main-video">
            <section className="main-video__container">
                <h1 className="main-video__title">{props.videoDetailsData.title}</h1>
                <div className="main-video__information">
                    <div className="main-video__content">
                        <h2 className="main-video__name">By {props.videoDetailsData.channel}</h2>
                        <TimeStamp className="main-video__date" timestamp={props.videoDetailsData.timestamp}/>
                    </div>
                    <div className="main-video__info">
                        <div className="main-video__views">
                            <Views 
                                classNameImg="main-video__viewsicon" 
                                classNameP="main-video__viewscount"  
                                views={props.views} 
                                videoDetailsData={props.videoDetailsData}/>
                        </div>

                        <div className="main-video__likes">
                            <Likes 
                                classNameImg="main-video__likesicon" 
                                classNameP="main-video__likescount"  
                                likes={props.likes} 
                                videoDetailsData={props.videoDetailsData}/>   
                        </div>
                    </div>
                </div>
                <hr className="main-video__divider"/>
                <p className="main-video__description">{props.videoDetailsData.description}</p>
            </section>
        </article>
    )
}

export default VideoDetails;
