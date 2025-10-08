 
import { artificialDelay } from "../utils/artificialDelay.js";
import axiosInstance from "../utils/axios.js";

import config from "../config/config.jsx";
 
export async function getAllApps(delay) {
    let axiosPromise = axiosInstance.get('/data.json')
    let res = await artificialDelay(axiosPromise , delay ?? config.loadingDelay)
    return res.data
}

 