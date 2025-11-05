import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import TrendingAppDetails from '../Components/TrendingApps/TrendingAppDetails';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Pages/Apps/AppDetails';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/TrendingAppsData.json'),
                path: "/",
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch('/AppsData.json'),
                Component: Apps,
            },
            {
                path: "/apps/:id",
                loader: () => fetch("/AppsData.json"),
                Component: AppDetails,
            },
            {
                path: '/TrendingApps/:id',
                loader: () => fetch('/TrendingAppsData.json'),
                Component: TrendingAppDetails,
            },
            {
                path: 'Installation',
                loader: () => fetch("/AppsData.json"),
                Component: Installation,
            }
        ]
    },

]);