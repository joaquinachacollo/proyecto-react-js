import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/CartContextProvider";
import reportWebVitals from "./reportWebVitals";
import { router } from "./Router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZgwwBjWcJIcqveKbIQJg28bKEKVegVKQ",
  authDomain: "ecommers-68a80.firebaseapp.com",
  projectId: "ecommers-68a80",
  storageBucket: "ecommers-68a80.appspot.com",
  messagingSenderId: "404839634909",
  appId: "1:404839634909:web:c24e208ed7754073d68834"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
