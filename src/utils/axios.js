import axios from "axios";
import config from "../config/config.jsx";

 
const axiosInstance = axios.create({
    baseURL: config.baseUrl
})

export default axiosInstance;