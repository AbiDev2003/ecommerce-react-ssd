import { Link } from "react-router";
import "./CheckoutHeader.css";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import CheckoutLockIcon from "./../../assets/images/icons/checkout-lock-icon.png";
import type { CartItem } from "../../types/ecommerce";

type CheckoutHeaderProps = {
  cart: CartItem[];
};
function CheckoutHeader({ cart }: CheckoutHeaderProps) {

  const totalQuantity = cart.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0,
  );

  return (
    <div className="checkout-header" data-testid="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={Logo} alt="logo" />
            <img className="mobile-logo" src={MobileLogo} alt="mobile-logo" />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {totalQuantity} items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src={CheckoutLockIcon} alt="lock-icon" />
        </div>
      </div>
    </div>
  );
}

export default CheckoutHeader;
