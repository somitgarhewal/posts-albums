import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import AppRoutes from './components/appRoutes'
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <AppRoutes/>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
