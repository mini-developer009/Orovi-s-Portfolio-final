import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom"; 
import './index.css';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './pages/AboutMe/About.jsx';
import Project from './pages/projects/Project.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/new",
        element: <Project></Project>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
