import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};
export const ContextProvider = ({ children }) => {
  const [value, dispath] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispath({ type: "CLOSE_ALERT" });
  };

  value.incQuantity = (itemID) => {
    dispath({ type: "INCREMENT_AUANTITY", payload: { id: itemID } });
  };

  value.decQuantity = (itemID) => {
    dispath({ type: "DECREMENT_AUANTITY", payload: { id: itemID } });
  };

  value.addToBasket = (item) => {
    dispath({ type: "ADD_TO_BASKET", payload: item });
  };

  value.handleBasketShow = () => {
    dispath({ type: "TOGGLE_BASKET" });
  };

  value.removeFromBasket = (itemId) => {
    dispath({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.setGoods = (data) => {
    dispath({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
