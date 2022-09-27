import  GoodsItem  from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);
  if (goods.lenght) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
