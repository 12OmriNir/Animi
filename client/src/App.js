import './App.css';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import MyPurcheses from './pages/MyPurcheses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/purcheses' element={<MyPurcheses/>}/>
      </Routes>
    </div>
  );
}

export default App;
