//DEFAULT
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/navbar/navbar'


// IMPORTATI DA ME
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Market from './pages/market';
import Fight from './pages/fight';
import NoPage from './pages/nopage';

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App/>
  },
  {
    path: "ReactPages",
    element: <App />,
  },
  {
    path: "market",
    element: <Market />,
  },
  {
    path: "fight",
    element: <Fight />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
