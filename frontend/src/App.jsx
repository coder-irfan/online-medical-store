import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Shop from "./pages/Shop"
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const hideLayoutPaths = ["/login", "/signup", "/forgot-password"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const [isLoggedIn, SetisLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      SetisLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="">

        {!shouldHideLayout && <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} setCartItems={setCartItems} />}
        
        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 40 }}
              className="fixed top-20 sm:right-10 lg:right-16 right-2.5 z-[60]"
            >
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>  
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/> }/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>  {/* USE FRAMER MOTION FOR EACH PAGES! */}
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/about" element={<About isLoggedIn={isLoggedIn}/>}/>
          <Route path="/shop" element={<Shop setCartItems={setCartItems}/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
        {!shouldHideLayout && <Footer />}
      </div>
    </>
  )
}

export default App;