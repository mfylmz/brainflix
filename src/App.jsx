import React, { Component } from "react";
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

const apiURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "c1f9b866-bf54-41b1-b2c7-b43709ca5da5";

class App extends Component {
  state = {
    nowPlayingID: "84e96018-4022-434e-80bf-000ce4cd12b8",
    videos: [],
    videoDetails: {
      comments: [],
    },
  };

  componentDidMount() {
    this.getVideosDetailsData(this.state.nowPlayingID);
    this.getVideosData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id !== undefined && prevState.videoDetails.id !== id) {
      this.getVideosDetailsData(id);
    }
  }

  getVideosData = () => {
    axios
      .get(`${apiURL}/videos?api_key=${apiKey}`)
      .then((response) => {
        this.setState({
          videos: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  getVideosDetailsData = (id) => {
    axios
      .get(`${apiURL}/videos/${id}?api_key=${apiKey}`)
      .then((response) => {
        this.setState({
          videoDetails: response.data,
        });
      })
      .catch((error) => console.log(error));

    axios
      .get(`${apiURL}/videos/${id}/comments?api_key=${apiKey}`)
      .then((response) => {
        this.setState((prevState) => ({
          videoDetails: {
            ...prevState.videoDetails,
            comments: response.data,
          },
        }));
      })
      .catch((error) => console.log(error));
  };

  addComment = (commentData) => {
   
    console.log("Adding comment:", commentData);
    
  };

  render() {
    const { videos, videoDetails } = this.state;

    return (
      <div className="App">
        <VideoPlayer posterImage={videoDetails} />

        <main className="main-section">
          <div className="main-section__left">
            <VideoDetails
              views={views}
              likes={likes}
              videoDetailsData={videoDetails}
            />

            <CommentForm
              user={user}
              videoDetailsData={videoDetails}
              addComment={this.addComment} // Pass addComment function as prop
            />

            <CommentsList
              avatar={avatar}
              videoDetailsData={this.state.videoDetails}
            />
          </div>

          <aside className="main-section__right">
            <VideoList
              videos={videos}
              currentVideoID={
                this.props.match.params.id ??
                "84e96018-4022-434e-80bf-000ce4cd12b8"
              }
            />
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
