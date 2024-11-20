import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/styles.scss';

import React, { lazy, Suspense } from "react";
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import LandingPage from "./routes/LandingPage"
const AboutPage = lazy(() => import ("./routes/About"));
const ContactPage = lazy(() => import ("./routes/Contact")) 
import ErrorPage from "./routes/errorpage"

const Evo11 = lazy(() => import('./routes/Evo11'));
const Blog = lazy(() => import('./routes/Blog'));

import "./i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Suspense fallback={<div>Loading...</div>}>        
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            
            <Route path="*" element={<ErrorPage />} />
            <Route path='evo11' element={<Evo11 />} />
            <Route path='blog' element={<Blog />} />
          </Suspense>       
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
