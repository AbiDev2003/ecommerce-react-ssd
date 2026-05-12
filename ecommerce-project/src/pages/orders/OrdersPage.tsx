import Header from "../../components/Header";
import "./OrdersPage.css";
import {useEffect, useState } from "react";
import axios from "axios";
import OrdersGrid from "./OrdersGrid";
import type { Order } from "../../types/ecommerce";

type OrdersPageProps = {
  cart: any[];
  loadCart: () => Promise<void>;
}

function OrdersPage({ cart, loadCart }: OrdersPageProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrderPageData = async () => {
      const response = await axios.get("/api/orders?expand=products")
      setOrders(response.data); 
    }
    fetchOrderPageData(); 
  }, []);

  
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart}/>
      </div>
    </>
  );
}

export default OrdersPage;
