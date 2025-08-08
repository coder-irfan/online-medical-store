import React from "react";

function OurStory() {
  return (
    <>
      <section className="relative py-16 lg:py-28 md:py-20 px-4 md:px-10 lg:px-20 xl:px-32">
        <img 
          src="images/mixed-pills.svg" 
          alt="mixed-pills" 
          className="absolute bottom-0 left-0 w-full max-w-20 sm:max-w-32 lg:max-w-40"
        />

        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 md:gap-10">
          <div className="max-w-[450px] md:max-w-[350px] lg:max-w-[450px] xl:max-w-[550px] space-y-4 lg:space-y-8 text-center md:text-left">
            <h2 className="text-neutral-darkBrown font-medium text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.7rem] md:leading-[1.3]">
              Bringing trusted health solutions, focused on quality care & reliability
            </h2>

            <p className="text-neutral-warmGray lg:text-lg md:pr-20">
              Our store offers a comprehensive range of pharmaceuticals, health and wellness products, and medical supplies to meet the diverse needs of our community.
            </p>

            <div className="pt-4 xl:pt-6 flex items-center justify-center md:justify-start">
              <a href="#customer-reviews">
                <button className="bg-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-xl lg:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray">
                  Customer Reviews
                  <img src="images/history.svg" alt="history icon" className=""/>
                </button>
              </a>
            </div>
          </div>

          <div className="">
            <img 
              src="images/female-holding-white-pill.svg" 
              alt="" 
              className="w-full max-w-[35rem] h-[18rem] sm:h-[20rem] md:h-[25rem] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStory;