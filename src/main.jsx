import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LogIn />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      {
        path: '/register',
        element:<Register/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
