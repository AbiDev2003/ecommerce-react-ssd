import "./index.css";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFoundPage from "./components/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";
import type { CartItem } from "./types/ecommerce";
// window.axios = axios;

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = async (): Promise<void> => {
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
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
      <Route path="*" element={<NotFoundPage cart={cart} type="404" />}></Route>
    </Routes>
  );
}

export default App;
