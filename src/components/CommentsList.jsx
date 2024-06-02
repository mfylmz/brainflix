import React from 'react';
import CommentItem from './CommentItem';


function CommentsList(props) {
    return (      
            <ul id="commentlist" className= "commentlist"> 
                {props.videoData.comments.map ((comment) => (
                    <div key={comment.id} className="commentlist__container">
                        <CommentItem  
                        avatar={props.avatar}
                        id={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}/>
                        <hr className="commentlist__divider"/>
                    </div>                        
                ))}                         
            </ul>       
    )
}

export default CommentsList;
