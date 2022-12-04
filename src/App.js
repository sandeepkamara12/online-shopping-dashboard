import './App.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/update" element={<UpdateProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App; 