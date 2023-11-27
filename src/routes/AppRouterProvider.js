import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import SiteError from '../pages/SiteError';
import ComicForm from '../pages/ComicForm';
import CreateExportComic from '../pages/CreateExportComic';

const router = createBrowserRouter([
    {
        path: "/",
        element: <CreateExportComic panelSize={10} />,
        errorElement: <SiteError />
    },
]);


function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

export default AppRouterProvider;
