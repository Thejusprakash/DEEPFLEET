import React, { useState, useEffect } from 'react';
import DB from './db/firebase.js';

const AdminPanel = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [taxRates, setTaxRates] = useState([]);
  const [taxNames, setTaxNames] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [taxName, setTaxName] = useState('');
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTaxName, setSelectedTaxName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch product categories from Firestore
    const fetchCategories = async () => {
      const categoriesSnapshot = await DB.collection('productCategories').get();
      const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data().name);
      setProductCategories(categoriesData);
    };

    // Fetch tax rates from Firestore
    const fetchTaxRates = async () => {
      const taxRatesSnapshot = await DB.collection('taxRates').get();
      const taxRatesData = taxRatesSnapshot.docs.map((doc) => doc.data().rate);
      setTaxRates(taxRatesData);
    };

    // Fetch tax names from Firestore
    const fetchTaxNames = async () => {
      const taxNamesSnapshot = await DB.collection('taxNames').get();
      const taxNamesData = taxNamesSnapshot.docs.map((doc) => doc.data().name);
      setTaxNames(taxNamesData);
    };

    // Fetch products from Firestore
    const fetchProducts = async () => {
      try {
        const productsSnapshot = await DB.collection('products').get();
        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchCategories();
    fetchTaxRates();
    fetchTaxNames();
    fetchProducts();
  }, []);

  const handleAddData = async () => {
    if (!productName || !productPrice || (!selectedCategory && !categoryName) || (!selectedTaxName && !taxName) || !taxRate) {
      setErrorMessage('All fields are mandatory.');
      return;
    }

    try {
       
      // Add Product to Firestore
      await DB.collection('products').add({
        name: productName,
        category: selectedCategory || categoryName,
        price: parseFloat(productPrice),
        taxRate: parseFloat(taxRate),
        taxName: selectedTaxName || taxName,

      })
      // Clear input fields
      setErrorMessage('');
      setProductName('');
      setSelectedCategory('');
      setProductPrice('');
      setTaxRate('');
      setSelectedTaxName('');
      setCategoryName('');
      setTaxName('');

      // Refresh products after adding new data
    //   fetchProducts();
    } catch (error) {
      setErrorMessage('Error adding product: ' + error.message);
    }
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleEdit = (productId, updatedData) => {
    DB.collection('products').doc(productId).set(updatedData);
  };

  const handleDelete = (productId) => {

    DB.collection('products').doc(productId).delete().then(() => {
      
      // Refresh products after deletion
    //   fetchProducts();
    });
    // window.location.reload()
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Panel</h2>

      <div style={styles.formContainer}>
        <label style={styles.formLabel}>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={styles.formInput}
          />
        </label>

        <label style={styles.formLabel}>
          Product Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.formInput}
          >
            <option value="" disabled>Select category...</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            style={styles.formInput}
            placeholder="Or type a new category..."
          />
        </label>

        <label style={styles.formLabel}>
          Tax Rate (%):
          <input
            type="text"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            style={styles.formInput}
          />
        </label>

        <label style={styles.formLabel}>
          Tax Name:
          <select
            value={selectedTaxName}
            onChange={(e) => setSelectedTaxName(e.target.value)}
            style={styles.formInput}
          >
            <option value="" disabled>Select tax name...</option>
            {taxNames.map((tax) => (
              <option key={tax} value={tax}>{tax}</option>
            ))}
          </select>
          <input
            type="text"
            value={taxName}
            onChange={(e) => setTaxName(e.target.value)}
            style={styles.formInput}
            placeholder="Or type a new tax name..."
          />
        </label>

        <label style={styles.formLabel}>
          Product Price:
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            style={styles.formInput}
          />
        </label>

        <button style={styles.formButton} onClick={handleAddData}>
          Add Data
        </button>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button style={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Tax Rate (%)</th>
            <th>Tax Name</th>
            <th>Product Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.taxRate || ''}</td>
              <td>{product.taxName || ''}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => {
                    const updatedName = prompt('Enter updated product name:', product.name);
                    if (updatedName !== null) {
                      handleEdit(product.id, { name: updatedName });
                    }
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  formContainer: {
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  formLabel: {
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  formInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginBottom: '15px',
    fontSize: '14px',
  },
  formButton: {
    backgroundColor: '#64f5fa',
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  searchContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  searchInput: {
    width: '200px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginRight: '10px',
  },
  searchButton: {
    backgroundColor: '#64f5fa',
    color: '#fff',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    borderCollapse: 'collapse',
    width: '80%',
    marginTop: '20px',
  },
  'table th, table td': {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
};

export default AdminPanel;
