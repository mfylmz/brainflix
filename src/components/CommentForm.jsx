import React, { useState } from 'react';
import Button from './Button';
import UserImage from './UserImage';

function CommentForm(props) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentText.trim()) {
      alert("Comment cannot be empty");
      return;
    }

    const commentData = {
      user: props.user,
      videoId: props.videoDetailsData.id,
      comment: commentText,
      timestamp: new Date().toISOString(),
    };

    props.addComment(commentData); 

    
    setCommentText('');
  };

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <section className="comments">
      <div className="comments__conversations">
        <p className="comments__heading">{props.videoDetailsData.comments.length} Comments</p>  
        <div className= "comments__commentscontainer">
          <UserImage className="comments__userimage" user={props.user}/>
          <form id="comments__form" className="comments__form" onSubmit={handleSubmit}>
            <div className="comments__formgroups">
              <div className="comments__formgroup">
                <label htmlFor="comment" className="comments__formlabel">JOIN THE CONVERSATION</label>
                <textarea
                  id="comment"
                  className="comments__forminput comments__forminput--active"
                  name="comment_description"
                  placeholder="Enter Comments"
                  value={commentText}
                  onChange={handleInputChange}
                  required
                />
              </div> 
              <Button text="COMMENT" className="comments__formsubmit" />
            </div>
          </form>
        </div>
        <hr className="comments__divider"/>
      </div>            
    </section> 
  );
}

export default CommentForm;
