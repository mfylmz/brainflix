import React, {Component} from "react";
import axios from "axios";
import user from "./assets/images/Mohan-muruge.jpg";
import avatar from "./assets/images/User-image.png";
import views from "./assets/icons/Icon-views.svg";
import likes from "./assets/icons/Icon-likes.svg";
import VideoPlayer from "./components/VideoPlayer";
import CommentsList from "./components/CommentsList";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import CommentForm from "./components/CommentForm";

class App extends Component{
  //state object
  state = {
    _isMounted: false,
    nowPlayingID: "84e96018-4022-434e-80bf-000ce4cd12b8",
    nowPlayingIndex: 0,
    videos: [],
    videoDetails:{
      comments:[]
    }      
  }

  componentDidMount(){
    this._isMounted = true;
    this.getVideosDetailsData(this.state.nowPlayingID);
    this.getVideosData();
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("comp updated", this.props);
    const { id } = this.props.match.params; 
    if (id !== undefined && prevState.videoDetails.id !== (id)) {
      this.getVideosDetailsData(id);
    }
  }


  getVideosData = ()=>{
    axios
      .get(`http://localhost:5000/videos`)
      .then((response)=>{
        console.log(response);
        this.setState({
          videos: response.data,
        });
      })
      .catch((error)=>console.log(error));
  };

  getVideosDetailsData = (id)=>{
    console.log("before axios request",id);
    axios
      .get(`http://localhost:5000/videos/${id}`)
      .then((response)=>{
        console.log("user object from api",response.data);
        this.setState({
          videoDetails: response.data,
        });
      })
      .catch((error)=>console.log(error));
  };

  render() {
    const {videos, videoDetails, nowPlayingID, nowPlayingIndex} = this.state;
    console.log("videos from app.js",videos);
    console.log("videoDetails from app.js",videoDetails);
    console.log("nowPlayingID from app.js",nowPlayingID);
    console.log("nowPlayingIndex from app.js",nowPlayingIndex);

    return (
      <div className="App">
        <VideoPlayer posterImage={videoDetails}/>      
        
        <main className="main-section">
          <div className="main-section__left">
            <VideoDetails 
            views={views} 
            likes={likes} 
            videoDetailsData={videoDetails}/>

            <CommentForm user={user} videoDetailsData={videoDetails}/>

            <CommentsList
            avatar={avatar}
            videoDetailsData={this.state.videoDetails}/>
          </div>

          <aside className="main-section__right">
            <VideoList
            videos={videos}
            currentVideoID={this.props.match.params.id ?? "84e96018-4022-434e-80bf-000ce4cd12b8"}
            setNowPlayingVideo={this.setNowPlayingVideo}/>
          </aside>           
        </main>  
      </div>
    );
  }
}

export default App;
