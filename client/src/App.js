import './App.css';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import MyPurchases from './pages/MyPurchases';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/purchases' element={<MyPurchases/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
