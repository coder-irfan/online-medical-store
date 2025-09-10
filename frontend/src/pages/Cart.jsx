import { React, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Cart({cartItems, setCartItems}) {
  const handleRemoveProduct = (_id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== _id));
  };

  const [loading, setLoading] = useState(false);

  const [isLoggedIn, SetisLoggedIn] = useState(false);

  const BACKEND_URL="https://online-medical-store-backend.onrender.com";

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      SetisLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmitOrder = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("Please login before submitting your order!");
      return;
    }

    setLoading(true);

    try { 
      const res = await fetch('https://online-medical-store-backend.onrender.com/api/orders', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.uid,
          items: cartItems,
          totalAmount: cartItems.reduce((total, item,) => total + item.price * item.quantities, 0),
          date: new Date(),
        }),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Order submitted successfully!");
        setCartItems([]);
      } else {
        alert(data.message || "Failed to submit order!");
      }
    } catch (error) {
      console.error("Error submitting order!:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      console.log("Order Submited");
      setLoading(false);
      alert('Order submitted successfully!')
    }, 4000);
  }

  return (
    <>
      <section className="h-80 md:h-[400px] w-[95vw] max-w-[400px] bg-neutral-light rounded-lg shadow-2xl overflow-y-auto">
        <div className="">
          <h2 className="text-neutral-darkBrown font-medium p-4">
            Cart
          </h2>
          <hr />
        </div>

        <div className="">
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center pt-36">
              <p className="text-neutral-darkBrown">Your cart is empty</p>
            </div>
          ) : (
            <ul className="p-6 space-y-4">
              {cartItems.map(item => (
                <li key={item._id} className="">
                  <div className="flex justify-between items-center bg-neutral-lightBeige p-4 rounded-md">
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img src={`${BACKEND_URL}${item.image}`} alt={item.name} className="max-w-16 h-16" />
                      </div>

                      <div className="">
                        <h3 className="text-neutral-darkBrown font-medium">
                          {item.name}
                        </h3>
                        <p className="text-neutral-lightBrown">
                          ${item.price} x {item.quantities} = <strong className="text-neutral-darkBrown">${(item.price * item.quantities).toFixed()}</strong>
                        </p>
                      </div>
                    </div>
                    
                    <div className="">
                      <img 
                        src="images/icon-delete.svg" 
                        alt="delete" 
                        className="brightness-50 cursor-pointer" 
                        onClick={() => handleRemoveProduct(item._id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
              <button 
                type="submit"
                disabled={loading}
                className={`border border-neutral-darkBrown font-medium text-sm py-2.5 px-5 rounded-xl text-neutral-darkBrown
                transition-all duration-300 hover:bg-neutral-darkBrown hover:text-neutral-light 
                ${loading ? 'opacity-75 cursor-not-allowed bg-neutral-darkBrown text-neutral-light' : ''}`}
                onClick={handleSubmitOrder}
              >
                {loading ? 'Submitting...' : 'Submit Order'}
              </button>
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default Cart;