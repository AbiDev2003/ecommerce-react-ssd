import { useState } from "react";
import { formatMoney } from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";
import axios from "axios";

function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateQuantity = async () => {
    setIsUpdatingQuantity(!isUpdatingQuantity);
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
    }
    setIsUpdatingQuantity(!isUpdatingQuantity);
  };

  function updateQuantityInput(e) {
    setQuantity(e.target.value);
  }

  function handleQuantityKeyDown(e) {
    const keyPressed = e.key;

    if (keyPressed === "Enter") {
      updateQuantity();
    } else if (keyPressed === "Escape") {
      setIsUpdatingQuantity(!isUpdatingQuantity);
      setQuantity(cartItem.quantity);
    }
  }

  return (
    <>
      <img className="product-image" src={cartItem.product.image} data-testid="cart-item-image"/>

      <div className="cart-item-details">
        <div className="product-name" data-testid="cart-item-name">{cartItem.product.name}</div>
        <div className="product-price" data-testid="cart-item-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span data-testid="cart-item-quantity">
            Quantity:{" "}
            {isUpdatingQuantity ? (
              <input
                type="text"
                className=".quantity-textbox"
                value={quantity}
                onChange={updateQuantityInput}
                onKeyDown={handleQuantityKeyDown}
              />
            ) : (
              <span className="quantity-label">{quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            data-testid="cart-item-delete-quantity-link"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
