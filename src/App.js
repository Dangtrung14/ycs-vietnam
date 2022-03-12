import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Footer from "./components/Footer/Footer"
import Announcement from "./components/topbar/Announciment";
import Cart from "./pages/cart/Cart";
import Product from "./pages/products/Product";
import ProductList from "./pages/products/productList";
import TourList from "./pages/tours/TourList";
import PostList from "./pages/blogs/PostList"
import SinglePost from "./components/singlePost/SinglePost";
import Navbar from "./components/topbar/Navbar";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <Announcement /> */}
        {<Topbar />}
        {<Navbar />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart/:UserId" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:ProductID" element={<Product />} />
          <Route path="/tours" element={<TourList />} />
          <Route path="/blogs" element={<PostList />} />
          <Route path="/post/:postId" element={<Single />} />

        </Routes>
        {<Newsletter />}
        {<Footer />}

      </>
    </BrowserRouter>
  );
}

export default App;
