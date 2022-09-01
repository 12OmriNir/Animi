// ====== //
// App.js //
// ====== //

import './App.css';
import Header from './components/Header/Header';
//import ProductPage from './pages/ProductPage/ProductPage';
//import TestElement from './components/TestElement/TestElement';

export default function App() {
  return (
    <div className="App">
      <Header />
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