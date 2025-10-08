import { artificialDelay } from "../utils/artificialDelay.js";
import axiosInstance from "../utils/axios.js";

import config from "../config/config.jsx";

export async function getAppByIds(ids, delay) {
    let axiosPromise = axiosInstance.get('/data.json')
    let res = await artificialDelay(axiosPromise, delay ?? config.loadingDelay)

    let selectedApps = ids.map(id => {
        let selectedApp = res.data.find((app) => app.id == id)
        return selectedApp; 
    });
    return selectedApps
}

