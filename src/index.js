import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HomePage from './routes/Home/HomePage.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WorksPage from './routes/Works/WorksPage.js';
import ServicesPage from './routes/Services/ServicesPage.js';
import TermsAndConditions from './routes/Terms/TermsAndConditions.js';
import PageNotFound from './routes/PageNotFound/PageNotFound.js';
import ContactsPage from './routes/Contacts/ContactsPage.js';
import AboutPage from './routes/About/AboutPage.js';
import CareersPage from './routes/Careers/CareersPage.js';
import BlogPage from './routes/Blog/BlogPage.js';

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
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/contacts",
    element: <ContactsPage/>
  },
  {
    path: "/services",
    element: <ServicesPage/>
  },
  {
    path: "/terms_conditions",
    element: <TermsAndConditions/>,
  },
  {
    path: "/careers",
    element: <CareersPage/>,
  },
  {
    path: "/blogs",
    element: <BlogPage/>,
  },
  {
    path: "/*",
    element: <PageNotFound/>,
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
