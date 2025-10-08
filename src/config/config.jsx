import { CirclesFourIcon, DownloadSimpleIcon, HouseIcon } from "@phosphor-icons/react"



let config = {
    // baseUrl: "http://192.168.0.10:5173",
    baseUrl: "http://localhost:5173",
    loadingDelay: 400,
    navLinks: [
        {
            path: "/",
            label: "Home",
            icon : <HouseIcon size={24}/>
        },
        { path: "/apps", label: "Apps"  , icon: <CirclesFourIcon size={24}/>},
        { path: "/installed", label: "Installations" , icon : <DownloadSimpleIcon size={24}/> },
    ] , 
    storageKey : 'apps'
}

export default config