import React from 'react';
import TimeStamp from './TimeStamp';

function CommentItem(props) {
    return (
        <li className="commentlist__item">
            <img className="commentlist__userimage" src={props.avatar} alt="user image"/>
            <div className="commentlist__group">
                <div className="commentlist__commentgroup">
                    <p className="commentlist__username">{props.name}</p>
                    <TimeStamp className="commentlist__timestamp" timestamp={props.timestamp}/>
                </div>
                <p className="commentlist__usercomment">{props.comment}</p>
            </div>
        </li>
    )
}

export default CommentItem;
