import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
import type { CartItem } from "../../types/ecommerce";

type CartItemDetailsProps = {
  cartItem: CartItem;
  loadCart: () => Promise<void>;
};

function CartItemDetails({ cartItem, loadCart }: CartItemDetailsProps) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState<number | string>(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateQuantity = async () => {
    if (!isUpdatingQuantity) {
      setIsUpdatingQuantity(true);
      return;
    }
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
    }
    setIsUpdatingQuantity(false);
  };

  function updateQuantityInput(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(e.target.value);
  }

  function handleQuantityKeyDown(e: KeyboardEvent<HTMLInputElement>) {
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
      <img
        className="product-image"
        src={cartItem.product.image}
        alt="product-image"
        data-testid="cart-item-image"
      />

      <div className="cart-item-details">
        <div className="product-name" data-testid="cart-item-name">
          {cartItem.product.name}
        </div>
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
