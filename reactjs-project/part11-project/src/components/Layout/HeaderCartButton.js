import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [addBump, setAddBump] = useState(false);

  const handleShowCart = () => {
    props.onShowCart();
  };

  const cartObj = useContext(CartContext);
  const numberOfItem = cartObj.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const { items } = cartObj;
  const btnClasses = `${classes.button} ${addBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.lengths === 0) {
      return;
    }

    setAddBump(true);
    console.log(items);
    console.log({ items });
    const timer = setTimeout(() => {
      setAddBump(false);
    }, 300);

    return () => {
      clearImmediate(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={handleShowCart}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItem}</span>
    </button>
  );
};
export default HeaderCartButton;
