import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
function App() {
  const [isOnCart, setIsOnCart] = useState(false);

  const accessCartHandler = () => {
    setIsOnCart(true);
  };

  const outCartHandler = () => {
    setIsOnCart(false);
  };
  return (
    <CartProvider>
      {isOnCart && <Cart onCloseCart={outCartHandler} />}
      <Header onShowCar={accessCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
