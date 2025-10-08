import config from "../config/config";



let storageKey = config.storageKey;



let getAllSavedApps = () => {
    return JSON.parse(localStorage.getItem(storageKey)) ?? []
}

let saveData = (data) => {
    localStorage.setItem(storageKey, JSON.stringify(data)) 
}

let saveToLocalStorage = (id) => {
    let existingData = getAllSavedApps()    
    let updatedData = [...existingData, id]
    saveData([...new Set(updatedData)])
    return getAllSavedApps()
}

let removeFromLocalStorage = (id) => {
    let existingData = getAllSavedApps()    
    let updatedData = existingData.filter((appId) => appId != id )
    console.log(id)
    saveData([...new Set(updatedData)])
    return getAllSavedApps()
}

let isInLocalStorage = (id) => {
    let existingData = getAllSavedApps()
    return existingData.includes(id)
}


export const storageMethods = {
    saveToLocalStorage,
    isInLocalStorage,
    getAllSavedApps,
    removeFromLocalStorage
}