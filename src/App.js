// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/product';
import Detail1 from './Components/productDetails/detail1';
import Detail2 from './Components/productDetails/detail2';
import Detail3 from './Components/productDetails/detail3';
import Detail4 from './Components/productDetails/detail4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
       <Route path="/product-detail/detail1" element={<Detail1 />} />
{/* <Route path="/product-detail/detail2" element={<Detail2 />} />
<Route path="/product-detail/detail3" element={<Detail3 />} />
<Route path="/product-detail/detail4" element={<Detail4 />} /> */}

      </Routes>
    </Router>
  );
}

export default App;