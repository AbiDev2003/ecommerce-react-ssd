import ProductCard from "./ProductCard";
import type { Product } from "../../types/ecommerce";

type ProductsGridProps = {
  products: Product[];
  loadCart: () => Promise<void>;
};

function ProductsGrid({ products, loadCart }: ProductsGridProps) {
  return (
    <div>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              loadCart={loadCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsGrid;
