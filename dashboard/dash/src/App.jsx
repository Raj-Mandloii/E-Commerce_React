import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetail";
import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaymentDetails from "./pages/Payment";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<PaymentDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
