export function saveCart(products){
    window.localStorage.setItem("cart", JSON.stringify(products));
}

export function clearCart(){
    window.localStorage.removeItem("cart");
}

export function getCart(){
    return JSON.parse(window.localStorage.getItem("cart")) || {products:[], isVisible: false, totalPrice: 0};
}
