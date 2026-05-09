import "./index.css";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
// window.axios = axios;

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<HomePage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route
        path="orders"
        element={<OrdersPage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route path="tracking" element={<TrackingPage cart={cart} />}></Route>
      <Route path="*" element={<NotFoundPage cart={cart} type="404" />}></Route>
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
    </Routes>
  );
}

export default App;
