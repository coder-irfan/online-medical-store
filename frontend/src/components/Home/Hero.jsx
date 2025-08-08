import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <> 
      <section className="relative bg-neutral-paleBeige pt-24 lg:pt-28 pb-16 md:pb-20 px-4 md:px-10 lg:px-20 xl:px-32">
        <img 
          src="images/clip-path.svg" 
          alt="clip-path" 
          className="absolute bottom-0 left-0 w-full max-w-28 sm:max-w-44 lg:max-w-56"
        />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-10">
          <div className="max-w-[450px] md:max-w-[480px] lg:max-w-[540px] space-y-4 lg:space-y-8 text-center md:text-left">
            <h1 className="text-neutral-darkBrown font-medium text-3xl md:text-[clamp(1.2rem,6vw,5rem)] leading-[1.1]">
              Your trusted care now and always
            </h1>

            <p className="text-neutral-warmGray lg:text-lg md:pr-20">
              For the best results, align your health needs with your medication plan.
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
              src="images/home-hero-medicins.svg" 
              alt="" 
              className="w-full max-w-96 md:max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;