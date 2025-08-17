import React from "react";
import { useState, useEffect } from "react";

function StoreCollection({setCartItems}) {
  const [products, setProducts] = useState([]); 
  const BACKEND_URL = "https://online-medical-store-backend.onrender.com";
  const [quantity, setQuantity] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${BACKEND_URL}/api/products`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setError('Could not load products. Please try again later!');
        setLoading(false);
      });
  }, []);

  const increase = (productId) => {
    setQuantity((prev) => ({
      ...prev, [productId] : (prev[productId] || 0) + 1,
    }));
  }

  const decrease = (productId) => {
    setQuantity((prev) => ({
      ...prev, [productId] : Math.max((prev[productId] || 0) - 1, 0),
    }));
  }

  const handleAddToCart = (product) => {
    const quantities = quantity[product._id] || 0;
    
    if (quantities === 0) return;
    
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item._id === product._id);

      if (itemExists) {
        return prevItems.map((item) => 
          item._id === product._id ? {...item, quantities: item.quantities + quantities } : item
        );
      } else {
        return [...prevItems, {...product, quantities}];
      }
    });

    setQuantity((prev) => ({
      ...prev, [product._id]: 0,
    }));
  }

  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 xl:px-32 py-16 md:py-20 xl:py-32">
        {loading && <p className="text-neutral-darkBrown text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Loading Products...</p>}
        {error && <p className="text-neutral-red text-lg text-center">{error}</p>}
        {!loading && !error && products.length === 0 && <p className="text-neutral-red text-center text-lg">No products found!</p>}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-14 sm:gap-y-20 max-w-96 mx-auto sm:max-w-full">
        
          {!loading && !error && products.map(product => (
            <div key={product._id} className="">
              <div className="space-y-4">
                <div className="bg-neutral-light px-4 py-6 rounded-xl shadow-sm">
                  <div className={`${product.label ? 'pb-4' : ''}`}>
                    <span className={`${product.label ? 'text-sm bg-neutral-lightOrange px-3 py-2 text-neutral-lightBeige rounded-lg' : ''}`}>{product.label}</span>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center gap-12">
                    <img src={`${BACKEND_URL}${product.image}`} alt={product.name} className="w-32 h-32" />  

                    <div className="w-full flex flex-col gap-2">
                      <div className="flex items-center justify-center gap-6">
                        <img 
                          src="images/plus-increase.svg" 
                          alt="increase" 
                          className="w-4 h-4 cursor-pointer hover:brightness-0 transition-all duration-300" 
                          onClick={() => increase(product._id)} 
                        />

                        <span className="font-medium text-lg text-neutral-darkBrown">{quantity[product._id] || 0}</span>

                        <img 
                          src="images/minus-decrease.svg" 
                          alt="decrease" 
                          className="w-4 h-4 cursor-pointer hover:brightness-0 transition-all duration-300" 
                          onClick={() => decrease(product._id)} 
                        />
                      </div>
                      <button className="flex items-center w-full justify-center gap-1 text-sm md:text-base py-2 rounded-full 
                        border-[3px] border-neutral-softBeigeYellow text-neutral-darkBrown font-bold tracking-widest 
                        relative z-10 shadow-md overflow-hidden transition duration-300 ease-in-out
                        hover:text-neutral-softBeigeYellow hover:scale-[1] px-1
                        before:absolute before:top-0 before:bottom-0 before:left-1/2 before:right-1/2
                        before:opacity-0 before:bg-[hsl(30,52%,20%)] before:z-[-1]
                        hover:before:left-0 hover:before:right-0 hover:before:opacity-100 
                        before:transition-all before:duration-500"
                        onClick={() => handleAddToCart(product)}>
                        <img src="images/cart-shopping-fast.svg" alt="shopping-cart" className="w-5 h-5" />
                        Shop Now
                      </button>
                    </div>            
                    
                  </div>
                </div>

                <div className="">
                  <h3 className="text-neutral-darkBrown font-medium md:text-lg xl:text-xl">{product.name}</h3>
                  <span className="text-neutral-warmGray font-medium">{`$${product.price.toFixed(2)} USD`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default StoreCollection;