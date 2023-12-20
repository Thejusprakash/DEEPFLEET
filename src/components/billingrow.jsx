import React, { useState, useEffect } from 'react';
import DB from './db/firebase.js';
import jsPDF from 'jspdf';



const CustomerApp = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [finalBill, setFinalBill] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 

  useEffect(() => {
    // Fetch product categories from Firestore
    const fetchCategories = async () => {
      const categoriesSnapshot = await DB.collection('productCategories').get();
      const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data().name);
      setProductCategories(categoriesData);
    };

    // Fetch products from Firestore
    const fetchProducts = async () => {
      const productsSnapshot = await DB.collection('products').get();
      const productsData = productsSnapshot.docs.map((doc) => doc.data());
      setProducts(productsData);
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const fetchTaxData = async (category) => {
    const taxSnapshot = await DB.collection('gstRates').doc(category).get();
    return taxSnapshot.exists ? taxSnapshot.data() : null;
  };

  const handleCreateSale = async () => {
    if (selectedProduct) {
      const product = products.find((p) => p.name === selectedProduct);
      if (product) {
        const taxData = await fetchTaxData(product.category);
        setFinalBill([...finalBill, { ...product, taxData }]);
        // Clear selected product
        setSelectedProduct('');
      }
    }
  };

  const handleGenerateFinalBill = () => {
    const pdf = new jsPDF();

    // Add content to PDF
    pdf.text('Final Bill', 10, 10);
    finalBill.forEach((item, index) => {
      pdf.text(`${item.name} - ${item.price}$ - Tax: ${item.taxName ? item.taxName : 'N/A'} (${item.taxRate ? item.taxRate : 'N/A'}%)`, 10, 20 + index * 10);
    });

    // Calculate total
    const total = finalBill.reduce((acc, item) => acc + item.price, 0);
    pdf.text(`Total: ${total}$`, 10, 20 + finalBill.length * 10 + 10);

    // Save PDF
    pdf.save('final-bill.pdf');
  };

  return (
    <div>
      <h1>Please Bill Your Order</h1>

      {/* Search products */}
      <label>
        Search Product:
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      {/* Select product for sale */}
      <label>
        Select Product:
        <select onChange={(e) => setSelectedProduct(e.target.value)} value={selectedProduct}>
          <option value="">Select Product</option>
          {products
            .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((product) => (
              <option key={product.name} value={product.name}>
                {product.name} - {product.price}$
              </option>
            ))}
        </select>
      </label>

      {/* Create Sale */}
      <div>
        <h2>Create Sale</h2>
        <button className='Success' style={{backgroundColor:'#5dcef0'}} onClick={handleCreateSale}>+Add to Sale</button>
      </div>

      {/* Generate Final Bill */}
      <div>
        <h2>Generate Final Bill</h2>
        <button  style={{backgroundColor:'#76f05b'}} onClick={handleGenerateFinalBill}>Generate Bill and Download PDF</button>
      </div>

      {/* Display Final Bill */}
      <div>
        <h2>Final Bill</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Tax Name</th>
              <th>Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            {finalBill.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}$</td>
                <td>{item.taxRate ? item.taxName : 'N/A'}</td>
                <td>{item.taxName ? item.taxRate : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerApp;
