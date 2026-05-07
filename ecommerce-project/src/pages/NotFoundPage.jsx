import Header from "../components/Header";
import "./NotFoundPage.css";

function NotFoundPage({ cart, type }) {
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
