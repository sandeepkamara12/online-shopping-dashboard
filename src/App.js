import './App.css';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Otp from './components/Otp';
import Protected from './components/Protected';
import Public from './components/Public';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Public Cmp={Splash} />}></Route>
        <Route path="/login" element={<Public Cmp={Login} />}></Route>
        <Route path="/register" element={<Public Cmp={Register} />}></Route>
        <Route path="/add" element={<Protected Cmp={AddProduct} />}></Route>
        <Route path="/update" element={<Protected Cmp={UpdateProduct} />}></Route>
        <Route path="/otp" element={<Public Cmp={Otp} />}></Route>
        {/* <Route path="/*" element={<UpdateProduct />}></Route> */}
      </Routes> 
    </div>
  );
}

export default App;