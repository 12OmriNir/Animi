// ====== //
// App.js //
// ====== //

import './App.css';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MyPurcheses from './pages/MyPurcheses/MyPurcheses'

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/purcheses' element={<MyPurcheses />} />
      </Routes>

      <ProductPage products={PRODUCTS} />
    </div>
  );
}


const PRODUCTS = [
  {
    id: 1,
    name: 'red_glass_123',
    title: 'Red Glass Anime',
    description: 'This is the best product in the world!',
    price: '₪49.99',
    category: 'Idol',
    inStock: true,
    imageUrl: ''
  },
  {
    id: 2,
    name: 'red_glass_123',
    title: 'Red Glass Anime',
    description: 'This is the best product in the world!',
    price: '₪49.99',
    category: 'Idol',
    inStock: true,
    imageUrl: ''
  },
  {
    id: 3,
    name: 'red_glass_123',
    title: 'Red Glass Anime',
    description: 'This is the best product in the world!',
    price: '₪49.99',
    category: 'Idol',
    inStock: true,
    imageUrl: ''
  }
]