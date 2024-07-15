import React from "react";
import axios from 'axios';
import Button from "./Button";
import videotpreview from "../assets/images/Upload-video-preview.jpg";
import { Link, Redirect} from 'react-router-dom';

class Upload extends React.Component {
    state={
        video_title: "",
        video_description: "",
        formIsSubmitted: false,
    };


    updateTitle = (event) =>{
        this.setState({
            video_title: event.target.value,
        });
    };

    updateDescription = (event) =>{
        this.setState({
            video_description: event.target.value,
        });
    };

    

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.video_title) {
            alert("Video title can not be empty.");
            return;
        }

        if (!this.state.video_description) {
            alert("Video description can not be empty.");
            return;
            } 
        if (this.state.video_title && this.state.video_description) {
            this.setState({formIsSubmitted:true})
        }
        this.postNewVideo();   
    }

    postNewVideo = () => {
        axios
        .post(`http://localhost:5000/videos`, {
            title: this.state.video_title,
            image:{videotpreview},
            description: this.state.video_description,
        })
        .then((response) => {
            console.log('response from posting to api', response);
            this.setState({
            video_title: '',
            video_description: '',
            });
        })
        .catch((err) => console.log(err));
    };

    render(){
        if(this.state.formIsSubmitted){
            return <Redirect to={`/`}/>
        }
        return (
            <div>
                <hr className="upload__topdivider"/>
                <section className="upload">
                    <h1 className="upload__title">Upload Video</h1>
                    <hr className="upload__divider"/>
                    <form id= "upload__form" className="upload__form" onSubmit={this.handleFormSubmit}>
                        <div className="upload__formgroups">
                            <div className="upload_imagegroup">
                                <label htmlFor="videothumnail" className="upload__formlabel">VIDEO THUMBNAIL</label>
                                <img className="upload__image" src={videotpreview} alt="videothumbnail image of upload"/>
                            </div>
                            <div className="upload__formgroup">
                                <label htmlFor="videotitle" className="upload__formlabel">TITLE YOUR VIDEO</label>
                                <input type="text" id="videoname" className="upload__input" name="video_title" placeholder="Add a title to your video" onChange={this.updateTitle}  value= {this.state.video_title} />
                                <label htmlFor="videodescription" className="upload__formlabel">ADD A VIDEO DESCRIPTION</label>
                                <textarea id="upload" className="upload__textarea" name="video_description" placeholder="Add a description of your video" onChange={this.updateDescription}  value= {this.state.video_Description} ></textarea>
                            </div> 
                        </div>
                        <hr className="upload__divider"/>
                        <div className="upload__buttongroup">
                            <Button type="button" text="PUBLISH" className="upload__submitpublish"/>                       
                            <Link to={`/`}>
                            <Button text="CANCEL" className="upload__submitcancel"/>
                            </Link>
                        </div>           
                    </form>
                </section>
                
            </div>
        )
    }
}
export default Upload
