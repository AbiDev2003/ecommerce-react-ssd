import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";
import utc from "dayjs/plugin/utc"

dayjs.extend(utc);

function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOptions = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });
          loadCart();
        };

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            data-testid="delivery-option"
            onClick={updateDeliveryOptions}
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
                {dayjs.utc(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
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
