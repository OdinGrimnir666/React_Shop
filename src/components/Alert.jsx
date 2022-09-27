import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(ShopContext);
  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div id="toast-container">
      <div className="toast">{name} добавлил в корзину</div>
    </div>
  );
};

export default Alert;
