import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Formvalidate from './component/formvalidate.jsx';
import Theme from './component/theme.jsx';
import CRUD from './component/CRUD.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/formvalidate",
    element: <Formvalidate/>
  },
  {
    path:"/theme",
    element: <Theme/>
  },
  {
    path:"/CRUD",
    element: <CRUD/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
