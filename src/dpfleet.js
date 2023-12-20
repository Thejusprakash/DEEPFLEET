import React from 'react';
import HEADER from './components/Header';
import './App.css';
import Todo from './components/Todo';
import BILLINGROW from './components/billingrow';
import ADDPRODUCTS from './components/Addproducts'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <HEADER/>
     <BILLINGROW/>
      {/* <Todo /> */}
      {/* <ADDPRODUCTS/> */}
    </div>
  );
}

export default App;
