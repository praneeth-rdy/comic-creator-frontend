import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import CreateExportComic from '../pages/CreateExportComic';
import SiteError from '../pages/SiteError';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <SiteError />
    },
    {
      path: "/create-export-comic",
      element: <CreateExportComic panelSize={10} />,
      errorElement: <SiteError />
  },
], {
  basename: '/comic-creator-frontend'
  // basename: '/'
});


function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

export default AppRouterProvider;
