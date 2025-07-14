// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/product';
import Detail2 from './Components/productDetails/detail2';
import Detail3 from './Components/productDetails/detail3';
import Detail4 from './Components/productDetails/detail4';
import Detail5 from './Components/productDetails/detail5';
import Detail6 from './Components/productDetails/detail6';
import Detail7 from './Components/productDetails/detail7';
import Detail8 from './Components/productDetails/detail8';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
       <Route path="/product-detail/detail2" element={<Detail2 />} />
       <Route path="/product-detail/detail3" element={<Detail3 />} />
       <Route path="/product-detail/detail4" element={<Detail4 />} />
       <Route path="/product-detail/detail5" element={<Detail5 />} />
       <Route path="/product-detail/detail6" element={<Detail6 />} />
       <Route path="/product-detail/detail7" element={<Detail7 />} />
       <Route path="/product-detail/detail8" element={<Detail8 />} />
      </Routes>
    </Router>
  );
}

export default App;