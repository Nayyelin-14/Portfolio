import ProductsCards from "./ProductsCards";
import { products } from "../../constants/sampleProduct";

const ProductList = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products &&
        products.length > 0 &&
        products.map((p, index) => (
          <ProductsCards
            key={index}
            id={p.id}
            name={p.name}
            image={p.images[0].url}
            color={Array.isArray(p.color) ? p.color : [p.color]}
            rating={p.rating}
            category={p.category}
            price={p.price}
            size={p.size}
          />
        ))}
    </main>
  );
};

export default ProductList;
