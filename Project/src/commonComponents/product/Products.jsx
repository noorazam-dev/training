"use client";
import "./products.scss";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setProducts(products);
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <br />
      {products.map((product) => {
        return (
          <div className="user" key={product.id}>
            <h1>{product.title}</h1>
            {/* <img src={product.image} alt="img"></img> */}
          </div>
        );
      })}
    </div>
  );
}
