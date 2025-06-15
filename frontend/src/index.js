import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './landing-page/Navbar';
import HomePage from './landing-page/home/HomePage';
import Footer from './landing-page/Footer';
import Signup from './landing-page/signup/Signup';
import SupportPage from './landing-page/support/Supportpage';
import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/product/ProductPage';

import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import PricingPage from './landing-page/pricing/PricingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


