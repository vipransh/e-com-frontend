import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from './components/Dashboard';
import Userpage from './Admin/Userpage';
import Productpage from './Admin/Productpage';
import CategegoryCoupon from './Admin/CategegoryCoupon';
import Product from './pages/Product'
import ProductCart from './pages/ProductCart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';
import Shop from './pages/Shop';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<Login/>}/>
          <Route path='/signUp' element={<Signup/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<ProductCart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/orderHistory' element={<OrderHistory/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dashboard'  element={<Dashboard/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/dashboard/Users'  element={<Userpage/>}/>
          <Route path='/dashboard/Products'  element={<Productpage/>}/>
          <Route path='/dashboard/category&coupons' element={<CategegoryCoupon/>}/>
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
