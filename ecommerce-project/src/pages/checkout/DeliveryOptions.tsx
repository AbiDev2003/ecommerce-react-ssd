import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";
import utc from "dayjs/plugin/utc";
import type { CartItem, DeliveryOption } from "../../types/ecommerce";

dayjs.extend(utc);

type DeliveryOptionsProps = {
  cartItem: CartItem;
  loadCart: () => Promise<void>;
  deliveryOptions: DeliveryOption[];
};

function DeliveryOptions({
  deliveryOptions,
  cartItem,
  loadCart,
}: DeliveryOptionsProps) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });
          await loadCart();
        };

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            data-testid="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              onChange={() => {}}
              name={`delivery-option-${cartItem.productId}`}
              data-testid="delivery-option-input"
            />
            <div>
              <div className="delivery-option-date">
                {dayjs
                  .utc(deliveryOption.estimatedDeliveryTimeMs)
                  .format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;
