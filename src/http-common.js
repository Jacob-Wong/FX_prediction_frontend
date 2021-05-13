import axios from "axios";

export default axios.create({
  baseURL: "https://fx-prediction.herokuapp.com/predict",
  headers: {
    "Content-type": "application/json",
  },
});
