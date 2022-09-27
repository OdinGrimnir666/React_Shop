import { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = (props) => {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, incQuantity, decQuantity } =
    useContext(ShopContext);
  return (
    <li className="collection-item">
      {name}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
        
      >
        remove
      </i>
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>
      x{quantity} = {price * quantity} UAH
      <span className="secondary-content">
        <i
          className="material-icons basket-quantity"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};
export default BasketItem;
