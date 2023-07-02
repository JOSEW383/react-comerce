import "./CartProduct.css";
import nullImage from "/src/assets/null_image.png";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cart";
import { getProductById } from "../services/products";

function CartProduct({ productId, amount }) {
  const { addProduct, removeProduct } = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    function fetchProduct() {
      const productData = getProductById(productId);
      setProduct(productData);
    }

    fetchProduct();
  }, [productId]);

  function handleAdd() {
    addProduct(productId);
  }

  function handleRemove() {
    removeProduct(productId);
  }

  return (
    <div className="product-cart">
      <div className="product-cart-header">
        <img
          className="product-cart-header-thumbnail"
          src={product.thumbnail || nullImage}
          alt={product.title}
        />
      </div>
      <div className="product-cart-body">
        <p>
          <b>{product.title}</b>
        </p>
        <p>{product.price + "€"}</p>
        <div className="product-cart-amount">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemove}
          >
            -
          </button>
          <input
            type="text"
            className="cart-amount-input"
            value={amount}
            readOnly
          />
          <button type="button" className="btn btn-success" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
