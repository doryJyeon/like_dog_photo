import axios from "axios";

const X_API_KEY = import.meta.env.VITE_X_API_KEY

const dogApi = axios.create({
  baseURL: "https://api.thedogapi.com",
  headers: {
    "x-api-key": X_API_KEY
  }
});

export default dogApi;
