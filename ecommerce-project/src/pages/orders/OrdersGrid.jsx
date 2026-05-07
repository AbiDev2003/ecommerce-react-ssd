import OrderDetailGrid from "./OrderDetailGrid";
import OrderHeader from "./OrderHeader";

function OrdersGrid({orders, loadCart}) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailGrid order={order} loadCart={loadCart}/>
          </div>
        );
      })}
    </div>
  );
}

export default OrdersGrid;
