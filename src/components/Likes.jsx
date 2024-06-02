import React from 'react';

function Likes(props) {
    return (
        <>
        <img className={props.classNameImg} src={props.likes} alt="likes icon" />
        <p className={props.classNameP}>{props.videoDetailsData.likes}</p> 
        </>
    )
}

export default Likes;
