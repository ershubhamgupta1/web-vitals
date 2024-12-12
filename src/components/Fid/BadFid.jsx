import React, { useEffect, useState } from 'react';
import './index.css'

let setFlag = false;

const BadFIDScore = () => {
    const PRODUCTS_LIST = Array.from({ length: 100000 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`
    }));
    const [products, setProducts] = useState(PRODUCTS_LIST.slice(0, 10));
    const [count, setCount] = useState(0);

    const applyFilter = () => {
        const first200Products = PRODUCTS_LIST.slice(0, products.length + 10);
          setProducts(first200Products);
        };

    useEffect(()=>{
      if(setFlag) return;
      let count =0;
      for (let i = 0; i < PRODUCTS_LIST.length; i++) {
        count++;
        console.log('i',i)
      }
      setFlag = true;
      setCount(count);
    }, [])
  
    return (
        <div className="score-container">
        <h2 className="score-header">Bad FID Score</h2>
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

export default BadFIDScore
