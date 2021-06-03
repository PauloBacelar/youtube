import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = (
      await youtube.get("/search", {
        params: {
          q: term,
        },
      })
    ).data.items;

    this.setState({ videos: response });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList />
      </div>
    );
  }
}

export default App;
