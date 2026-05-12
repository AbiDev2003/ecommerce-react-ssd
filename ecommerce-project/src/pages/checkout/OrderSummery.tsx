import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";
import type { CartItem, DeliveryOption } from "../../types/ecommerce";

type OrderSummeryProps = {
  cart: CartItem[];
  loadCart: () => Promise<void>;
  deliveryOptions: DeliveryOption[];
};

function OrderSummery({ deliveryOptions, cart, loadCart }: OrderSummeryProps) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );
          if (!selectedDeliveryOption) return null;

          return (
            <div
              key={cartItem.productId}
              className="cart-item-container"
              data-testid="cart-item-container"
            >
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />
                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummery;
