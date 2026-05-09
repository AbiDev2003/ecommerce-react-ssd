import axios from "axios";
import { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import OrderSummery from "./OrderSummery";
import PaymentSummery from "./PaymentSummery";
// import './../../index.css';

function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState([]);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };
    fetchCheckoutData();
  }, [cart]);

  useEffect(() => {
    const fetchPaymentSummery = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummery(response.data);
    };
    fetchPaymentSummery();
  }, [cart]);

  // useEffect(() => {
  //   axios.get("/api/payment-summary").then((response) => {
  //     setPaymentSummery(response.data);
  //   });
  // }, []);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummery
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
          />

          <PaymentSummery paymentSummery={paymentSummery} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
