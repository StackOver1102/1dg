import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './screen/homeScreen';
import { Register } from './screen/Register';
import { Login } from './screen/Login';
import AffiLiate from './screen/Affiliate';
import Mass from './screen/Mass';
import Order from './screen/Order';
import SerVices from './screen/Services';
import Ticker from './screen/Ticker';
import SupPort from './screen/Support';
import Error404 from './screen/404';
import View from './screen/View';
import PrivateRoutes from './ProtectRouter';
import ViewTiket from './screen/ViewTiket';
import CashFlow from './screen/CashFLowScreen';
import AddFunds from './screen/AddFunds';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/new" element={<View />} />
          <Route path="/new/:service" element={<View />} />
          <Route path="/mass" element={<Mass />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/services" element={<SerVices />} />
          <Route path="/settings" element={<Ticker />} />
          <Route path="/tickets" element={<SupPort />} />
          <Route path="/affiliate" element={<AffiLiate />} />
          <Route path='/viewtiket' element={<ViewTiket />} />
          <Route path='/viewtiket/:id' element={<ViewTiket />} />
          <Route path="/cashflow" element={<CashFlow/>}/>
          <Route path="/addfunds" element={<AddFunds/>}/>

        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
