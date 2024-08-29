"use client";
import React, { useState } from 'react';


function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    seller: '',
    stock: '',
    price: '',
    discountPrice: '',
    category: '',
    images: [],
    productId: Date.now()
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      images: e.target.value.split(",")
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z].*$/;
    const sellerRegex = /^[A-Za-z0-9][A-Za-z0-9.-]*$/;
    const stockRegex = /^[0-9]+$/;
    const priceRegex = /^[0-9]*\.?[0-9]+$/;
    const categoryRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(product.name)) {
      alert('Product name must start with a letter.');
      return;
    }
    if (!sellerRegex.test(product.seller)) {
      alert('Seller information must start with a letter or number and may only contain . or - as special characters.');
      return;
    }
    if (!stockRegex.test(product.stock)) {
      alert('Stock quantity must contain only numbers.');
      return;
    }
    if (!priceRegex.test(product.price) || (product.discountPrice && !priceRegex.test(product.discountPrice))) {
      alert('Price and Discounted Price must be valid decimal numbers.');
      return;
    }
    if (!categoryRegex.test(product.category)) {
      alert('Category must only contain letters and spaces.');
      return;
    }

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added successfully!');
    setProduct({
      name: '',
      seller: '',
      stock: '',
      price: '',
      discountPrice: '',
      category: '',
      images: [],
      productId: Date.now()
    });
  };

  return (
    <div className="add-product-container text-black">
      <h1 className='text-center text-lg pb-4'>Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col add-product-form p-4">
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label>Seller Information</label>
        <input
          type="text"
          name="seller"
          value={product.seller}
          onChange={handleChange}
          required
        />

        <label>Stock Quantity</label>
        <input
          type="text"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label>Discounted Price</label>
        <input
          type="text"
          name="discountPrice"
          value={product.discountPrice}
          onChange={handleChange}
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <label>Product Images</label>
        <input
          type="text"
          name="images"
          value={product.images.join(",")}
          onChange={handleImageChange}
        />

        <button className='items-center transition ease-in-out delay-102  hover:-translate-y-1 hover:scale-110  duration-300' type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
