import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const {
    goods = [],
    addToBasket = Function.prototype,
  } = props;
  if (goods.lenght) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodsList;