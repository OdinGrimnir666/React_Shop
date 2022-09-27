import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = (props) => {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.lenght;
  return (
    <div className="cart blue darknen-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
