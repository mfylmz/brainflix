<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = (props) => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchVideoDetails(id);
  }, [id]);

  const fetchVideoDetails = (id) => {
   
    const apiURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=c1f9b866-bf54-41b1-b2c7-b43709ca5da5`;

    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        console.log("Video details:", data);
        setVideoDetails(data);
      })
      .catch(error => console.error('Error fetching video details:', error));
  };

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="site-video">
      <video className="site-video__video" controls poster={props.posterImage.image}>
        <source src={videoDetails.videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos!
      </video>
    </section>
  );
};
=======
import React from 'react';

function VideoPlayer(props) {
    return (
        <section className="site-video"> 
            <video className="site-video__video" controls poster={props.posterImage.image}>Sorry, your browser doesn't support embedded videos!</video>
        </section>
    )
}
>>>>>>> sprint-3

export default VideoPlayer;
