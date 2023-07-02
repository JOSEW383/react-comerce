import "./ProductCard.css";
import nullImage from "/src/assets/null_image.png";
import addToCartImg from "/src/assets/add_cart.svg";
import removeFromCartImg from "/src/assets/remove_cart.svg";
import { CartContext } from "../context/cart";
import { useContext, useState, useEffect } from "react";

function ProductCard({ id, title, thumbnail, price }) {
  const { cart, addProduct, setProductAmount, getProductAmount } = useContext(CartContext);
  const [productInCart, setProductInCart] = useState(getProductAmount(cart, id) > 0);

  useEffect(() => {
    console.log("useEffect");
    if (productIsInCart()) {
      setProductInCart(true);
    } else {
      setProductInCart(false);
    }
  }, [cart.products]);

  function handleProductButton() {
    if (productIsInCart()) {
      setProductInCart(false);
      setProductAmount(id, 0);
    } else {
      setProductInCart(true);
      addProduct(id);
    }
  }

  function productIsInCart() {
    return getProductAmount(cart.products, id) > 0;
  }

  return (
    <div className="product-card">
      <div className="product-card-header">
        <img
          className="product-card-heade-thumbnail"
          src={thumbnail ? thumbnail : nullImage}
          alt={title}
        />
      </div>
      <div className="product-card-body">
        <p>
          <b>{title}</b>
        </p>
        <p>{price + "€"}</p>
        <button
          type="button"
          className={
            "btn btn-" +
            (productInCart ? "danger" : "primary") +
            " cart-icon"
          }
          onClick={handleProductButton}
        >
          <img src={productInCart ? removeFromCartImg : addToCartImg} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
