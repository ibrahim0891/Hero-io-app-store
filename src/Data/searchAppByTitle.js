import config from "../config/config.jsx";
import { artificialDelay } from "../utils/artificialDelay"
import axiosInstance from "../utils/axios"





export let searchAppByTitle = async (query , delay) => {
    console.log(query);
    let allApps = await artificialDelay(axiosInstance.get('/data.json'), delay ?? config.loadingDelay)
    let matchedApp = allApps.data.filter((app) => {
        return app.title.toLowerCase().includes(query.toLowerCase())
    })

    return matchedApp
}

