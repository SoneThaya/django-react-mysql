import React, { useState, useEffect } from "react";
import Products from "../components/Products";

const Backend = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    s: "",
    sort: "",
    page: 1,
  });

  useEffect(() => {
    (async () => {
      const arr = [];

      if (filters.s) {
        arr.push(`s=${filters.s}`);
      }

      if (filters.sort) {
        arr.push(`sort=${filters.sort}`);
      }

      if (filters.sort) {
        arr.push(`page=${filters.page}`);
      }

      const response = await fetch(
        `http://localhost:8000/api/products/backend?${arr.join("&")}`
      );

      const content = await response.json();

      setProducts(
        filters.page === 1 ? content.data : [...products, ...content.data]
      );
    })();
  }, [filters]);

  return (
    <Products products={products} filters={filters} setFilters={setFilters} />
  );
};

export default Backend;
