import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
  
);


