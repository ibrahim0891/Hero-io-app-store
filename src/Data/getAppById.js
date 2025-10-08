import { artificialDelay } from "../utils/artificialDelay.js";
import axiosInstance from "../utils/axios.js";

import config from "../config/config.jsx";

export async function getAppById(id, delay) {
    let axiosPromise = axiosInstance.get('/data.json')
    let res = await artificialDelay(axiosPromise, delay ?? config.loadingDelay)
    let selectedApp = res.data.find((app) => app.id == id)
    return selectedApp
}

