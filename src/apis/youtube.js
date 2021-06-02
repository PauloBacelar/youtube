import axios from "axios";

const KEY = "AIzaSyATIfDQXUCD9yHQCIsXdlGrcDHNdfevWdY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
