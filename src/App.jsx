import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
import Product from './Pages/Product';
import CarrinhoPage from './Pages/Carrinho';
import Finalizar from './Pages/finalizar/finalizar';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='productDetails' element={<ProductDetails />}/>
          <Route path='product' element={<Product />}/>
          <Route path='carrinho' element={<CarrinhoPage />}/>
          <Route path='finalizar' element={<Finalizar/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}