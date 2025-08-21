import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";


import BannerSlider from "./Components/Home/BannerSlider";
import ProductsSection from "./Components/Home/ProductsSection";
import WhyChooseUs from "./Components/Home/WhyChooseUs";
import CoreValues from "./Components/Home/CoreValues";


import Product from "./Components/product";
import ServicesPage from "./Components/ServicesPage";
import LeanResourcesPage from "./Components/LeanResourcesPage";
import AboutUsSection from "./Components/aboutUs/AboutUsSection";
import {

  StatsModern,

  ClientsSection,
  MoreAboutUs,
  FAQSection,
} from "./Components/Home/HomeExtra";

import Detail2 from "./Components/productDetails/detail2";
import Detail3 from "./Components/productDetails/detail3";
import Detail4 from "./Components/productDetails/detail4";
import Detail5 from "./Components/productDetails/detail5";
import Detail6 from "./Components/productDetails/detail6";
import Detail7 from "./Components/productDetails/detail7";
import Detail7b from "./Components/productDetails/detail7b";
import Detail8 from "./Components/productDetails/detail8";
import Detail9 from "./Components/productDetails/detail9";
import Detail10 from "./Components/productDetails/detail10";
import Detail11 from "./Components/productDetails/detail11";
import Detail12 from "./Components/productDetails/detail12";
import Detail13 from "./Components/productDetails/detail13";
import Detail14 from "./Components/productDetails/detail14";
import Detail15 from "./Components/productDetails/detail15";
import Detail16 from "./Components/productDetails/detail16";
import Detail17 from "./Components/productDetails/detail17";
import Detail18 from "./Components/productDetails/detail18";
import Detail19 from "./Components/productDetails/detail19";
import Detail20 from "./Components/productDetails/detail20";
import Detail21 from "./Components/productDetails/detail21";
import Detail22 from "./Components/productDetails/detail22";
import Detail23 from "./Components/productDetails/detail23";
import Detail24 from "./Components/productDetails/detail24";
import Detail25 from "./Components/productDetails/detail25";

import Product2 from "./Components/product2";
import Contact from "./Components/Home/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import OurPartners from "./Components/Home/OurPartners";
import HeroSection from "./Components/Home/HeroSection";


function HomePage() {
  return (
    <>
      <BannerSlider />
      <ProductsSection />
      <WhyChooseUs />
      <CoreValues />
      <OurPartners />
      <HeroSection />
      {/* <HeroBanner /> */}
      <StatsModern />
      {/* <DifferenceBlock /> */}
      <ClientsSection />
      <MoreAboutUs />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsSection />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<LeanResourcesPage />} />


          {/* Product Detail Routes */}
          <Route path="/product-detail/detail2" element={<Detail2 />} />
          <Route path="/product-detail/detail3" element={<Detail3 />} />
          <Route path="/product-detail/detail4" element={<Detail4 />} />
          <Route path="/product-detail/detail5" element={<Detail5 />} />
          <Route path="/product-detail/detail6" element={<Detail6 />} />
          <Route path="/product-detail/detail7" element={<Detail7 />} />
          <Route path="/product-detail/detail7b" element={<Detail7b />} />

          <Route path="/product-detail/detail8" element={<Detail8 />} />
          <Route path="/product-detail/detail9" element={<Detail9 />} />
          <Route path="/product-detail/detail10" element={<Detail10 />} />
          <Route path="/product-detail/detail11" element={<Detail11 />} />
          <Route path="/product-detail/detail12" element={<Detail12 />} />
          <Route path="/product-detail/detail13" element={<Detail13 />} />
          <Route path="/product-detail/detail14" element={<Detail14 />} />
          <Route path="/product-detail/detail15" element={<Detail15 />} />
          <Route path="/product-detail/detail16" element={<Detail16 />} />
          <Route path="/product-detail/detail17" element={<Detail17 />} />
          <Route path="/product-detail/detail18" element={<Detail18 />} />
          <Route path="/product-detail/detail19" element={<Detail19 />} />
          <Route path="/product-detail/detail20" element={<Detail20 />} />
          <Route path="/product-detail/detail21" element={<Detail21 />} />
          <Route path="/product-detail/detail22" element={<Detail22 />} />
          <Route path="/product-detail/detail23" element={<Detail23 />} />
          <Route path="/product-detail/detail24" element={<Detail24 />} />
          <Route path="/product-detail/detail25" element={<Detail25 />} />

          <Route path="/contact" element={<Contact />} />

         <Route path="/product2" element={<Product2 />} />

         
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
