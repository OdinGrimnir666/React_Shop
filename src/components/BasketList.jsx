import BasketItem from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

const BasketList = (props) => {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price * element.quantity;
  }, 0);
  console.log(order);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина Пуста</li>
      )}
      <li className="collection-item active">Обзая стоимость: {totalPrice}</li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export default BasketList;
