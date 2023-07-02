import { saveCart, clearCart, getCart } from "../services/storage";
import { getProductById } from "../services/products";
import { useReducer } from "react";

const CART_ACTIONS = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  SET_PRODUCT_AMOUNT: "SET_PRODUCT_AMOUNT",
  CLEAR_CART: "CLEAR_CART",
  SET_IS_VISIBLE: "SET_IS_VISIBLE",
};

const MOCK_CART = {
  products: [
    { id: 8, amount: 2 },
    { id: 5, amount: 9 },
  ],
  isVisible: true,
  totalPrice: 30,
};

function cartReducer(oldCart, action) {
  // Pitfall: return alwais a new cart object
  let cart = structuredClone(oldCart);
  switch (action.type) {
    case CART_ACTIONS.ADD_PRODUCT:
      if (getProductAmount(cart.products, action.productId) == 0) {
        cart.products.push({
          id: action.productId,
          amount: 1,
        });
      } else {
        cart.products.map((product) => {
          if (product.id == action.productId) {
            product.amount++;
          }
        });
      }
      cart.totalPrice = getTotalPrice(cart.products);
      saveCart(cart);
      return cart;

    case CART_ACTIONS.REMOVE_PRODUCT:
      if (getProductAmount(cart.products, action.productId) == 1) {
        cart.products = cart.products.filter(
          (product) => product.id != action.productId
        );
      } else {
        cart.products.map((product) => {
          if (product.id == action.productId) {
            product.amount--;
          }
        });
      }
      cart.totalPrice = getTotalPrice(cart.products);
      saveCart(cart);
      return cart;

    case CART_ACTIONS.SET_PRODUCT_AMOUNT:
      if (action.amount <= 0) {
        cart.products = cart.products.filter(
          (product) => product.id != action.productId
        );
      } else {
        cart.products.map((product) => {
          if (product.id == action.productId) {
            product.amount = action.amount;
          }
        });
      }
      cart.totalPrice = getTotalPrice(cart.products);
      saveCart(cart);
      return cart;

    case CART_ACTIONS.CLEAR_CART:
      clearCart();
      return {
        ...cart,
        products: [],
        totalPrice: 0,
      };

    case CART_ACTIONS.SET_IS_VISIBLE:
      return {
        ...cart,
        isVisible: action.isVisible,
      };

    default:
      return cart;
  }
}

function getTotalPrice(products) {
  let totalPrice = 0;
  products.map((product) => {
    totalPrice += getProductById(product.id).price * product.amount;
  });
  return totalPrice;
}

function getProductAmount(products, productId) {
  let amount = 0;
  if (products.length > 0) {
    products.map((product) => {
      if (product.id == productId) {
        amount = product.amount;
      }
    });
  }
  return amount;
}

export function useCartReducer() {
  const [cart, dispatch] = useReducer(cartReducer, getCart());

  function setIsVisible(isVisible) {
    dispatch({ type: CART_ACTIONS.SET_IS_VISIBLE, isVisible });
  }

  function clearCart() {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  }

  function addProduct(productId) {
    dispatch({ type: CART_ACTIONS.ADD_PRODUCT, productId });
  }

  function removeProduct(productId) {
    dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, productId });
  }

  function setProductAmount(productId, amount) {
    dispatch({ type: CART_ACTIONS.SET_PRODUCT_AMOUNT, productId, amount });
  }

  return {
    cart,
    setIsVisible,
    clearCart,
    addProduct,
    removeProduct,
    setProductAmount,
    getProductAmount,
  };
}
