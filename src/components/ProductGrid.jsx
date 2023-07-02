import ProductCard from "./ProductCard.jsx";
import "./ProductGrid.css";

function ProductGrid({ factError, productsList }) {
  return (
    <div className="product-grid">
      {factError && (
        <div className="fact-error">
          <h3>Something went wrong</h3>
        </div>
      )}
      {productsList?.totalResults === 0 && (
        <div className="no-results">
          <h3>No results found</h3>
        </div>
      )}
      {productsList?.response &&
        productsList.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
              thumbnail={product.thumbnail}
            />
          );
        })}
    </div>
  );
}

export default ProductGrid;
