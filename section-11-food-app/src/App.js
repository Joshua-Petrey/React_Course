import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler =() =>{
    setCartIsShown(true)
  }
  // passed through from app > cart > modal > backdrop 
  const hideCartHandler =() =>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      {/* main page content in main */}
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
