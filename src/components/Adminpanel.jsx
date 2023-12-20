import React, { useState, useEffect } from 'react';
import DB from './db/firebase.js';
import firebase from 'firebase';

const AdminPanel = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [gstRates, setGstRates] = useState({});
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    // Fetch product categories, GST rates, and products from Firebase
    const fetchCategories = async () => {
      const categoriesSnapshot = await DB.collection('productCategories').get();
      const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data().name);
      setProductCategories(categoriesData);
    };

    const fetchGstRates = async () => {
      const gstRatesSnapshot = await DB.collection('gstRates').get();
      const gstRatesData = {};
      gstRatesSnapshot.docs.forEach((doc) => {
        gstRatesData[doc.id] = doc.data().rate;
      });
      setGstRates(gstRatesData);
    };

    const fetchProducts = async () => {
      const productsSnapshot = await DB.collection('products').get();
      const productsData = productsSnapshot.docs.map((doc) => doc.data());
      setProducts(productsData);
    };

    fetchCategories();
    fetchGstRates();
    fetchProducts();
  }, []);

  const handleAddCategory = () => {
    DB.collection('productCategories').doc(categoryName).set({
      name: categoryName,
    });
  };

  const handleAddTaxRate = () => {
    DB.collection('gstRates').doc(productCategory).set({
      rate: parseFloat(taxRate),
    });
  };

  const handleAddProduct = () => {
    DB.collection('products').doc(productName).set({
      name: productName,
      category: productCategory,
      price: parseFloat(productPrice),
    });
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      {/* Add Product Category */}
      <div>
        <h3>Add Product Category</h3>
        <label>
          Category Name:
          <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        </label>
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      {/* Add GST Rate */}
      <div>
        <h3>Add GST Rate</h3>
        <label>
          Product Category:
          <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
            <option value="">Select Category</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Tax Rate (in %):
          <input type="text" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
        </label>
        <button onClick={handleAddTaxRate}>Add Tax Rate</button>
      </div>

      {/* Add Product */}
      <div>
        <h3>Add Product</h3>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Product Category:
          <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
            <option value="">Select Category</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Product Price:
          <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Display Categories */}
      <div>
        <h3>Product Categories</h3>
        <ul>
          {productCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>

      {/* Display GST Rates */}
      <div>
        <h3>GST Rates</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Category</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(gstRates).map(([category, rate]) => (
              <tr key={category}>
                <td>{category}</td>
                <td>{rate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Display Products */}
      <div>
        <h3>Products</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
