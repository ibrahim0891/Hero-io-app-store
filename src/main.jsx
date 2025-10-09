import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Hompage from "./Pages/home/Homepage.jsx";
import AllApps from "./Pages/App/All-apps-page.jsx";
import InstalledAppPage from "./Pages/Installed/Installed-app-page.jsx";
import NotFound from "./Pages/not-found.jsx";
import AppNotFound from "./Pages/app-not-found.jsx";
import AppCountContext from "./context/appSearchResultCount.jsx";
import AppDetailsPage from "./Pages/AppDetails/App-info-page.jsx";
import GloabalError from "./Pages/Global-components/GloabalError.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "/",
                element: <Hompage />,
            },
            {
                path: "/apps",
                element: <AllApps />,
            },
            {
                path: "/installed",
                element: <InstalledAppPage />,
            },
            {
                path: "/app-details/:appId",
                element: <AppDetailsPage />,
                children: [
                    {
                        path: '*',
                        element: <AppNotFound />
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
        errorElement : <GloabalError/>
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppCountContext>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </AppCountContext>
    </StrictMode>
);
