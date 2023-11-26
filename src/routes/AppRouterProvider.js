import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import SiteError from '../pages/SiteError';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <SiteError />
    },
]);


function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

export default AppRouterProvider;
