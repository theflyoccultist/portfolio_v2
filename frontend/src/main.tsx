import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/styles.scss';

import React, { lazy, Suspense } from "react";
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './utilities/ScrollToTop';
import App from "./App"
import LandingPage from "./routes/LandingPage";
import AboutPage from './routes/About';
import ContactPage from './routes/Contact'; 
import ErrorPage from "./routes/errorpage"

const Evo11 = lazy(() => import('./routes/Projects/Evo11'));
const SimplePlan = lazy(() => import('./routes/Projects/SimplePlan'));
const VanityVixen = lazy(() => import('./routes/Projects/VanityVixen'));
const BlogList = lazy(() => import('./routes/Blog/BlogList'))
const ArticlePage = lazy(() => import('./routes/Blog/ArticlePage'))

import "./i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path='evo11' element={
              <Suspense fallback={<div>Loading Evo11...</div>}>
                <Evo11 />
              </Suspense> 
              } />
            <Route path='simpleplan' element={
              <Suspense fallback={<div>Loading simplePlan...</div>}>
                <SimplePlan />
              </Suspense>
            } />
            <Route path='vanityvixen' element={
              <Suspense fallback={<div>Loading VanityVixen...</div>}>
                <VanityVixen />
              </Suspense>
            } />
            <Route path='blog' element={
              <Suspense fallback={<div>Loading Articles...</div>}>
                <BlogList />
              </Suspense> 
              } />
            <Route path='blog/:id' element={
              <Suspense fallback={<div>Loading Article...</div>}>
                <ArticlePage />
              </Suspense> 
              } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
