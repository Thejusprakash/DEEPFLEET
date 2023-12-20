import React from 'react';
// import { useHistory } from 'react-router-dom';
const AppBar = () => {
  const handleLogin = () => {
    // const history = useHistory();
    // Implement your login logic here
    console.log('User clicked login');
  };
  return (
    <div style={styles.appBar}>
      <div style={{}}>
       <p style={{marginLe
        :'0px',fontFamily:'console.assert(first, second)',fontWeight:"bolder"}}>BILLING </p>
      </div>
      <div style={styles.loginContainer}>
        <button  onClick={(()=>{
              window.location.href = '/addproducts'
        })}  style={styles.loginButton}>
          Admin
        </button>
       
      </div>
    </div>
  );
};

const styles = {
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#2196F3', // Change the background color as needed
    color: '#fff', // Change the text color as needed
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '40px', // Adjust the height as needed
  },
  loginContainer: {
    flex: 0.2,
    textAlign: 'right',
  },
  loginButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#4CAF50', // Change the button color as needed
    color: '#fff', // Change the text color as needed
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AppBar;
