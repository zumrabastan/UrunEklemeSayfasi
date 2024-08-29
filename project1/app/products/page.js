"use client";

import React, { useState, useEffect } from 'react';
import "../style.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    showOutOfStock: true,
  });


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
    setFilteredProducts(storedProducts);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const applyFilters = () => {
    let filtered = products;

    if (filters.minPrice) {
      filtered = filtered.filter((product) => parseFloat(product.price) >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((product) => parseFloat(product.price) <= parseFloat(filters.maxPrice));
    }

    if (!filters.showOutOfStock) {
      filtered = filtered.filter((product) => parseInt(product.stock) > 0);
    }

    setFilteredProducts(filtered);
  };


  return (
    <div className="product-listing-container text-black flex flex-col sm:flex-row m-4 mt-8">
      <div className="filter-section flex flex-col items-center sm:items-start w-auto sm:w-1/4">
        <h2 className='p-4 '>Filters</h2>

        <label >Minimum Price:</label>
        <input
          className='w-1/2 bg-transparent border border rounded-md border-black'
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
        /><br></br>


        <label>Maximum Price:</label>
        <input
          className='w-1/2 bg-transparent border border rounded-md border-black'
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />

        <label >
          <input
            type="checkbox"
            name="showOutOfStock"
            checked={filters.showOutOfStock}
            onChange={handleFilterChange}
          />
          Show Out of Stock Products
        </label>

        <button className='transition ease-in-out delay-150  bg-violet-300 hover:-translate-y-1 hover:scale-110 hover:bg-violet-400 duration-300 border border-2 rounded-md border-black' onClick={applyFilters}>Apply Filters</button>
      </div>

      <div className="product-list-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full px-16 sm:px-10">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="product-card border border-gray-300 p-4"
      
    >
      {product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
      )}
      <div className='mt-4'>
        <h3>{product.name}</h3>
        <p>{product.seller}</p>
        <p>${product.price}</p>
        <p>{parseInt(product.stock) > 0 ? "In Stock" : "Out of Stock"}</p>
        <button 
          onClick={() => window.location.href = `/product-detail/${product.productId}`}
          className='bg-slate-300 hover:bg-violet-300 hover:text-white text-black rounded-md py-2 px-4'>
          Details
        </button>
      </div>
    </div>
  ))}
</div>

    </div>




  );
}

export default Products;
