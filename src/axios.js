import axios from "axios";

/** base url for making requests to the data base of tmdb */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
