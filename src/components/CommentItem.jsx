import React from 'react';
import TimeStamp from './TimeStamp';

function CommentItem(props) {
    return (
        <div className="commentlist__item">
<<<<<<< HEAD
            <img className="commentlist__userimage" src={props.avatar} alt="user image" />
            <div className="commentlist__group">
                <div className="commentlist__commentgroup">
                    <p className="commentlist__username">{props.name}</p>
                    <TimeStamp className="commentlist__timestamp" timestamp={props.timestamp} />
=======
            <img className="commentlist__userimage" src={props.avatar} alt="user image"/>
            <div className="commentlist__group">
                <div className="commentlist__commentgroup">
                    <p className="commentlist__username">{props.name}</p>
                    <TimeStamp className="commentlist__timestamp" timestamp={props.timestamp}/>
>>>>>>> sprint-3
                </div>
                <p className="commentlist__usercomment">{props.comment}</p>
            </div>
        </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> sprint-3
}

export default CommentItem;
