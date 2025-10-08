import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Hompage from "./Pages/home/Home.jsx";
import AllApps from "./Pages/App/All-Apps.jsx";
import InstalledAppPage from "./Pages/Installed/Installations.jsx";
import AppDetails from "./Pages/App/App-details.jsx";
import NotFound from "./Pages/not-found.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "/",
                element: <Hompage/>,
            },
            {
                path: "/apps",
                element:<AllApps/>,
            },
            {
                path: "/installed",
                element: <InstalledAppPage/>,
            },
            {
                path: "/app-details",
                element: <AppDetails/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </StrictMode>
);
