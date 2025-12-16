import React from 'react';
import ProductPage from '../components/ProductPage';
import { productData } from '../productData';

function CCTV() {
  return <ProductPage product={productData.cctv} />;
}

export default CCTV;
