import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import bootstrap js files
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StoreContextProvider } from 'contexts/store.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContextProvider>
    <AppRouter />
  </StoreContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
