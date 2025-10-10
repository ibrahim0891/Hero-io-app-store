import { CirclesFourIcon, DownloadSimpleIcon, HouseIcon } from "@phosphor-icons/react"



let config = {
    // baseUrl: "http://localhost:5173",
    baseUrl: "https://hero-io-app-store-six.vercel.app",
    loadingDelay: Math.random() * (9000 - 1000) + 1000,
    navLinks: [
        {
            path: "/",
            label: "Home",
            icon: <HouseIcon size={24} />
        },
        { path: "/apps", label: "Apps", icon: <CirclesFourIcon size={24} /> },
        { path: "/installed", label: "Installations", icon: <DownloadSimpleIcon size={24} /> },
    ],
    storageKey: 'apps'
}

export default config