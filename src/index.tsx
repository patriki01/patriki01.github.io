import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import RemoveDataPage from "./pages/RemoveDataPage";
import ErrorPage from "./pages/ErrorPage";

const routes: RouteObject[] = [
    {
        path: '/',
        Component: HomePage,
    },
    {
        path: '/privacy',
        Component: PrivacyPage,
    },
    {
        path: '/request',
        Component: RemoveDataPage,
    },
    {
        path: '*',
        Component: ErrorPage
    }
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={createBrowserRouter(routes)}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
