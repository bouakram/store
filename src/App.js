import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Shop from "./routes/shop/shop.component";
import Cart from "./routes/cart/cart.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
// import { createUserDocumentFromAuth, getCurrentUser, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user)
    //   }
    //   dispatch(setCurrentUser(user))
    // })

    // return unsubscribe

    dispatch(checkUserSession())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
