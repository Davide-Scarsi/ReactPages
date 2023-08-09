//DEFAULT
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// IMPORTATI DA ME
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import Pagina3 from './pages/pagina3';
import NoPage from './pages/nopage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "pagina1",
    element: <Pagina1/>,
  },
  {
    path: "pagina2",
    element: <Pagina2/>,
  },
  {
    path: "pagina3",
    element: <Pagina3/>,
  },
  {
    path: "*",
    element: <NoPage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
