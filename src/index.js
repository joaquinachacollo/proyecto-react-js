import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './Router/index';
import { RouterProvider } from "react-router-dom"
import { CartContextProvider } from './context/CartContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CartContextProvider>
      <RouterProvider router= {router}/>
    </CartContextProvider>
  </>
  
);


