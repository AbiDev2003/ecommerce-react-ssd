import axios from "axios";
import { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import OrderSummery from "./OrderSummery";
import PaymentSummery from "./PaymentSummery";
import type {CartItem, DeliveryOption, PaymentSummary} from '../../types/ecommerce'
// import './../../index.css';

type CheckoutPageProps = {
  cart: CartItem[]; 
  loadCart: () => Promise<void>; 
}

function CheckoutPage({ cart, loadCart }: CheckoutPageProps) {
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);
  const [paymentSummery, setPaymentSummery] = useState<PaymentSummary | null>(null);

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
