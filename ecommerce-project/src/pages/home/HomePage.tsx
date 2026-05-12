import "./HomePage.css";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsGrid from "./ProductsGrid";
import { useSearchParams } from "react-router";
import NotFoundPage from "../../components/NotFoundPage";
import type { CartItem, Product } from "../../types/ecommerce";

type HomePageProps = {
  cart: CartItem[];
  loadCart: () => Promise<void>;
};

function HomePage({ cart, loadCart }: HomePageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get<Product[]>(urlPath);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
        {products.length === 0 && (
          <NotFoundPage cart={cart} type="empty-products" />
        )}
      </div>
    </>
  );
}

export default HomePage;
