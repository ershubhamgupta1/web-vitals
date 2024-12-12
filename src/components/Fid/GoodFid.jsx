import React, { useEffect, useState } from 'react';
import './index.css'

let setFlag = false;

const GoodFIDScore = () => {
  const [count, setCount] = useState(0);
  const PRODUCTS_LIST = Array.from({ length: 100000 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`
  }));
  const [products, setProducts] = useState(PRODUCTS_LIST.slice(0, 10));

  useEffect(() => {
    console.log('setFlag========', setFlag);
    const chunkSize = 1000; // Process in smaller chunks
    let i = 0;
    let count = 0;
    const computeChunk = () => {
      const end = Math.min(i + chunkSize, 100000);
      for (; i < end; i++) {
        console.log('i', i);
        count++;
      }
    };
    if (i < 1e9) {
      setTimeout(computeChunk, 0); // Schedule the next chunk
    } else {
      setCount(count);
      setFlag = true;
    }
    console.log('ready to measure FID====');
  }, []);

  const applyFilter = () => {
    const first200Products = PRODUCTS_LIST.slice(0, products.length + 10);
      setProducts(first200Products);
    };

  return (
    <div className="score-container">
      <h2 className="score-header">Good FID Score</h2>
      <h4 className="score-count">Total count: {count}</h4>
      <button className="filter-button" onClick={applyFilter}>Get 10 more products</button>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoodFIDScore;
