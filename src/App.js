
import Home from './component/Pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './component/Pages/Home/NavBar';
import About from './component/Pages/About/About';
import ContextProvider from './component/conrext-store/ContextProvider';
import Footer from './component/Footer';
import  Header from './component/Header'
import Authentication from './component/Authentication/Authentication';
import React, { Fragment, Suspense, useContext } from 'react';
import cartContext from './component/conrext-store/contextAPI';


const Contact =React.lazy(()=>import('./component/Pages/ContactUs/Contact'));
const Store =React.lazy(()=>import('./component/Pages/Store/Store'));
const SingleProduct=React.lazy(()=>import('./component/Pages/SingleProduct/SingleProduct'));

function App() {

  const ctx=useContext(cartContext)


  return (
    <Fragment>
      <Suspense fallback={<div style={{"position":"fixed" , "top":"50%"}} className='text-center'>Loading...</div>}>
     
       <NavBar />
       <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/store' element={<Store /> } />

    
      <Route path='/about' element={<About />} />
      <Route path='/login' element={ <Authentication />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Home />} />
     
    </Routes>
    <Footer />
    </Suspense>
  </Fragment>
  );
}

export default App;
