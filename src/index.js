import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home';
import Auth from './pages/Auth';
import Routing from './components/routing/Routing';

const AppLayout = ()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element : <Home/>
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Routing/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
