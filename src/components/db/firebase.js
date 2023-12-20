import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCzgB_sW4Ol12WTcnJ2A9Q9yfJUaEp6aI",
  authDomain: "sensordata-ff1d3.firebaseapp.com",
  databaseURL: "https://sensordata-ff1d3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sensordata-ff1d3",
  storageBucket: "sensordata-ff1d3.appspot.com",
  messagingSenderId: "1094614512668",
  appId: "1:1094614512668:web:232d53e804b974f5e45bd9",
  measurementId: "G-JMR1DV7NMJ",
});

const DB = firebaseApp.firestore();

export default DB;
