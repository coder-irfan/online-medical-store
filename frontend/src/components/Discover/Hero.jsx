import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="relative bg-neutral-paleBeige pt-24 lg:pt-36 pb-16 md:pb-20 px-4 md:px-10 lg:px-20 xl:px-32">
        <img 
          src="images/three-grouped-bills.svg" 
          alt="grouped-bills" 
          className="absolute bottom-0 left-0 w-full max-w-24 sm:max-w-40 lg:max-w-48"
        />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-10">
          <div className="max-w-[450px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[540px] space-y-4 lg:space-y-8 text-center md:text-left">
            <h2 className="text-neutral-darkBrown font-medium text-3xl md:text-[clamp(1rem,6vw,4.5rem)] leading-[1.1]">
              From wellness to care all in one place
            </h2>

            <p className="text-neutral-warmGray lg:text-lg md:pr-20">
              Your health is in good hands with Medifit. We’re here to provide you with a wide range of healthcare essentials, carefully selected.
            </p>

            <div className="pt-4 xl:pt-6 flex items-center justify-center md:justify-start">
              <Link to="/shop" >
                <button className="bg-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-xl lg:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray">
                  <img src="images/bag.svg" alt="shopping bag" className=""/>
                  Shop now
                </button>
              </Link>
            </div>
          </div>

          <div className="">
            <img 
              src="images/girl-hand-with-bill.svg" 
              alt="" 
              className="w-full max-w-[35rem] h-[430px] sm:h-[500px] md:h-auto rounded-tr-[5rem] rounded-bl-[5rem] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;