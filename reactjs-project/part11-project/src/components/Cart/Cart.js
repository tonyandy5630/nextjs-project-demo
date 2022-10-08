import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalPrice = 0;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItem = cartCtx.items.map((item) => {
    totalPrice += item.price * item.amount;
    return (
      <CartItem
        key={item.id}
        amount={item.amount}
        name={item.name}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item)}
        onAdd={cartItemAddHandler.bind(null, item)}
      >
        {item.name}
      </CartItem>
    );
  });

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {/* <ul className={classes["cart-items"]}>{cartItem}</ul> */}
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
