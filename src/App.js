import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/nav-bar/nav-bar.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Cart from "./routes/cart/cart.component";


function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
