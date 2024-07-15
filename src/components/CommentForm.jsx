import React from 'react';
import Button from './Button';
import UserImage from './UserImage';

function CommentForm(props) {
    const {comments} = props.videoDetailsData;

    return (
        <section className="comments">
            <div className="comments__conversations">
                <p className="comments__heading">{comments.length} Comments</p>  
                <div className= "comments__commentscontainer">
                    <UserImage className="comments__userimage" user={props.user}/>
                    <form id= "comments__form" className="comments__form">
                    <div className="comments__formgroups">
                        <div className="comments__formgroup">
                            <label htmlFor="comment" className="comments__formlabel">JOIN THE CONVERSATION</label>
                            <textarea id="comment" className="comments__forminput comments__forminput--active" name="comment_description" placeholder="Enter Comments" required></textarea>
                        </div> 
                        <Button text="COMMENT" className="comments__formsubmit" />
                    </div>
                    </form>
                </div>
                <hr className="comments__divider"/>
            </div>            
        </section> 
    )
}

export default CommentForm;
