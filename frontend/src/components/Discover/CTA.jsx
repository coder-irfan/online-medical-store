import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <>
      <section className=" bg-neutral-paleBeige pt-4 pb-10 md:pb-20 xl:pb-28 px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-10">
          <div className="max-w-[450px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] space-y-4 lg:space-y-8 text-center md:text-left">
            <h2 className="text-neutral-darkBrown font-medium text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.7rem] md:leading-[1.3]">
              Save up to 10% on select tablets limited time only!
            </h2>

            <p className="text-neutral-warmGray lg:text-lg md:pr-10">
              Don't miss out on our limited-time sale! 10% discount on a wide range of essential health products.
            </p>

            <div className="pt-4 xl:pt-6 flex items-center justify-center md:justify-start">
              <a href="#insight">
                <button className="bg-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-xl lg:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray">
                  View Insight
                  <img src="images/vector.svg" alt="vector" className=""/>
                </button>
              </a>
            </div>
          </div>

          <div className="">
            <img 
              src="images/young-woman-is-sitting-kitchen-carefully-examining-smartphone-with-one-hand-casually.svg" 
              alt="young-woman-carefully-examining-pill" 
              className="w-full max-w-[40rem]"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA;