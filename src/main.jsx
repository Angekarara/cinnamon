import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home';
import Projects from './pages/projects';
import Services from './pages/services';
import Careers from './pages/carreers';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "/projects",
    element: <div><Projects/></div>,
  },
  {
    path: "/services",
    element: <div><Services/></div>,
  },
  {
    path: "/careers",
    element: <div><Careers/></div>,
  },
  {
    path: "/about",
    element: <div><About/></div>,
  },
  {
    path: "/blog",
    element: <div><Blog/></div>,
  },
  {
    path: "/contact",
    element: <div><Contact/></div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} /> 
   </React.StrictMode>,
)