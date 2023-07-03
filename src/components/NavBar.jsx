import "./NavBar.css";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import cartImg from "/src/assets/cart.svg";

function NavBar(props) {
  const { setIsVisible } = useContext(CartContext);

  function openCart() {
    setIsVisible(true);
  }

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand app-title" href="#">
          React Comerce
        </a>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-outline-warning cart-icon"
            onClick={openCart}
          >
            <img src={cartImg} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
