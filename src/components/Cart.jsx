import "./Cart.css";
import { useContext, useEffect } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../context/cart";
// import DevLog from "./DevLog.jsx";

function Cart(props) {
  const { cart, setIsVisible, clearCart } =
    useContext(CartContext);

    useEffect(() => {
      if (cart.isVisible) {
        document.body.style.overflow = 'hidden';
      }else{
        document.body.style.overflow = 'unset';
      }
    }, [cart.isVisible]);
  
  function closeCart(e = null) {
    const className = e?.target.className;
    if (
      !className ||
      className.includes("cart-background") ||
      className.includes("close-cart")
    ) {
      setIsVisible(false);
    }
  }

  function pay() {
    closeCart();
    clearCart();
    alert("Payed!");
  }


  if (cart.isVisible) {
    return (
      <dialog className="cart-background blur-background" onClick={closeCart}>
        {/* <DevLog data={cart.products} /> */}
        <div className="cart-container slide-top">
          <button
            type="button"
            className="btn-close close-cart"
            aria-label="Close"
            onClick={closeCart}
          ></button>
          <div className="cart-header">
            <h1>Checkout</h1>
          </div>
          <div className="cart-body">
            <div>
              {cart.products.map((product) => {
                return (
                  <CartProduct
                    key={product.id}
                    productId={product.id}
                    amount={product.amount}
                  />
                );
              })}
            </div>
          </div>
          <div className="cart-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearCart}
            >
              Clear cart
            </button>
            <div className="cart-footer-price">Total: <br/>{cart.totalPrice}€</div>
            <button type="button" className="btn btn-primary" onClick={pay}>
              Pay
            </button>
          </div>
        </div>
      </dialog>
    );
  }
}

export default Cart;
