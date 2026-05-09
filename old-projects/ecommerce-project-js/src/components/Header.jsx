import { NavLink, useNavigate, useSearchParams } from "react-router";
import "./Header.css";
import CartIcon from "../assets/images/icons/cart-icon.png";
import SearchIcon from "../assets/images/icons/search-icon.png";
import LogoWhite from "../assets/images/logo-white.png";
import MobileLogoWhite from "../assets/images/mobile-logo-white.png";
import { useState } from "react";
function Header({ cart }) {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");
  const [search, setSearch] = useState(searchText || "");

  const navigate = useNavigate();

  const updateSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };

  const searchProducts = () => {
    if (!search || search === "") return;
    navigate(`/?search=${search}`);
  };

  function handleSearchKeyDown(e) {
    const keyPressed = e.key;

    if (keyPressed === "Enter") {
      searchProducts();
    } else if (keyPressed === "Escape") {
      setSearch("");
    }
  }

  let totalQuantity = 0;
  cart.forEach((cartItem) => (totalQuantity += cartItem.quantity));

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" data-testid="header-logo" src={LogoWhite} />
            <img
              className="mobile-logo"
              data-testid="header-mobile-logo"
              src={MobileLogoWhite}
            />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            data-testid="header-search-bar"
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
            onChange={updateSearchInput}
            onKeyDown={handleSearchKeyDown}
          />

          <button className="search-button" data-testid="header-search-button" onClick={searchProducts}>
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders" data-testid="header-orders-link">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout" data-testid="header-cart-link">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
