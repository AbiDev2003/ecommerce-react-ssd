import type { CartItem } from "../types/ecommerce";
import Header from "./Header";
import "./NotFoundPage.css";


type NotFoundPageProps = {
  cart: CartItem[], 
  type?: string 
}; 
function NotFoundPage({ cart, type }: NotFoundPageProps) {
  return (
    <>
      <title>
        {type === "empty-products" ? "No items found" : "404 Page Not Found"}
      </title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="not-found-message">
        {type === "empty-products" ? "Sorry 😔! Looks like no items are there" : "Page not found"}
      </div>
    </>
  );
}

export default NotFoundPage;
