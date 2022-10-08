import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newTotalAmount =
      state.totalAmount + action.addItem.price * action.addItem.amount;
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.addItem.id
    );

    const existedItem = state.items[existedItemIndex];

    let updatedItems = state.items;
    console.log(existedItemIndex);

    if (existedItem) {
      const updatedItem = {
        ...existedItem,
        amount: existedItem.amount + action.addItem.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.addItem);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems = state.items;

    const toDeleteIndex = state.items.findIndex(
      (item) => item.id === action.removeItem.id
    );

    console.log(toDeleteIndex);
    let updateItem = state.items[toDeleteIndex];
    let deleteItemAmount = action.removeItem.amount - 1;

    const newTotalAmount = state.totalAmount - action.removeItem.price * 1;

    if (deleteItemAmount <= 0) {
      updatedItems = [...state.items];
      updatedItems.splice(toDeleteIndex, 1);
    } else {
      updateItem = { ...updateItem, amount: updateItem.amount - 1 };
      updatedItems[toDeleteIndex] = updateItem;
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, cartStateDispatch] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    cartStateDispatch({ type: "ADD_ITEM", addItem: item });
  };

  const removeItemHandler = (item) => {
    cartStateDispatch({ type: "REMOVE_ITEM", removeItem: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
