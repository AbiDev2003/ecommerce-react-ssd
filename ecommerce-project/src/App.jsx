import "./App.css";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
      <Route path="orders" element={<OrdersPage />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
