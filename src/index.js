import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HomePage from './routes/Home/HomePage.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WorksPage from './routes/Works/WorksPage.js';
import ServicesPage from './routes/Services/ServicesPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/works",
    element: <WorksPage/>
  },
  {
    path: "/services",
    element: <ServicesPage/>
  },
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
