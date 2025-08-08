import React from "react";

function ShoptCategory() {
  return (
    <section className="pt-32 md:pt-36 xl:pt-44">
      <div className="">
        
        <div className="space-y-10 lg:space-y-20">
          <div className="text-center space-y-4 lg:space-y-8">
            <h2 className="text-neutral-darkBrown font-medium text-xl md:text-[clamp(1.5rem,4vw,3rem)]">
              Explore Our Store Collection
            </h2>

            <p className="text-neutral-warmGray lg:text-lg max-w-[320px] md:max-w-[450px] mx-auto">
              Our medical store offers trusted products easy navigation, and fast shipping
            </p>
          </div>
          
          <div className="overflow-hidden px-10 py-3 md:py-6 bg-neutral-paleBeige">
            <div className="flex items-center gap-20 md:gap-40 whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/thoughtfully-made.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Thoughtfully Made</h3>
              </div>

              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/non-toxic-formula.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Non-Toxic Formula</h3>
              </div>

              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/organic-essentials.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Organic Essentials</h3>
              </div>

              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/safe-for-everyone.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Safe for Everyone</h3>
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/thoughtfully-made.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Thoughtfully Made</h3>
              </div>

              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/non-toxic-formula.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Non-Toxic Formula</h3>
              </div>

              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/organic-essentials.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Organic Essentials</h3>
              </div>

              <div className="flex flex-col items-center justify-between gap-3">
                <img src="images/safe-for-everyone.svg" alt="" className="w-9 h-9 md:w-12 md:h-12" />
                <h3 className="text-sm md:text-base xl:text-lg text-neutral-darkBrown font-medium">Safe for Everyone</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ShoptCategory;
