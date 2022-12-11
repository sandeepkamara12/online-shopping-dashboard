import './App.css';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Otp from './components/Otp';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected Cmp={Splash} />}></Route>
        <Route path="/login" element={<Protected Cmp={Login} />}></Route>
        <Route path="/register" element={<Protected Cmp={Register} />}></Route>
        <Route path="/add" element={<Protected Cmp={AddProduct} />}></Route>
        <Route path="/update" element={<Protected Cmp={UpdateProduct} />}></Route>
        <Route path="/otp" element={<Protected Cmp={Otp} />}></Route>
      </Routes> 
    </div>
  );
}

export default App;