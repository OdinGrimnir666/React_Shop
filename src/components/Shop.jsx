import { useEffect, useContext } from "react";
import GoodsList from "./Goods.List";
import Preloader from "./Preloader";
import { API_KEY, API_URL } from "../config";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";
import { ShopContext } from "../context";

const Shop = (params) => {
  const { loading, setGoods, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-nest-line
  }, []);

  return (
    <main className="conteiner content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
