import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8GBCBqRCUZ9Da8Ld9gBiTOSPHbZzCpMc",
  authDomain: "evernote-clone-f5fb8.firebaseapp.com",
  projectId: "evernote-clone-f5fb8",
  storageBucket: "evernote-clone-f5fb8.appspot.com",
  messagingSenderId: "697818130752",
  appId: "1:697818130752:web:4c652172cefee66a7ef2a5",
  measurementId: "G-6DWSB988XL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
