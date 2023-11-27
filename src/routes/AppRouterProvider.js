import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SiteError from '../pages/SiteError';
import CreateExportComic from '../pages/CreateExportComic';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // errorElement: <SiteError />
    },
    {
      path: "/create-export-comic",
      element: <CreateExportComic panelSize={10} />,
      // errorElement: <SiteError />
  },
]);


function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

export default AppRouterProvider;
