import React from "react";

function Services() {
  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 xl:px-32 pt-8 pb-12 md:pb-20">
        <div className="bg-neutral-light px-4 py-8 md:p-10 rounded-lg flex items-center justify-between flex-wrap gap-16 max-w-[450px] mx-auto md:max-w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <img src="images/warranty.svg" alt="warranty" className="w-8 h-8" />
            </div>

            <div className="">
              <h3 className="text-neutral-darkBrown font-medium">30 Days warranty</h3>
              <p className="text-neutral-warmGray text-sm">Enjoy peace of mind with warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="">
              <img src="images/exchange.svg" alt="exchange" className="w-8 h-8" />
            </div>

            <div className="">
              <h3 className="text-neutral-darkBrown font-medium">Exchange policy</h3>
              <p className="text-neutral-warmGray text-sm">You’re satisfied with your purchase</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="">
              <img src="images/payment.svg" alt="payment" className="w-8 h-8" />
            </div>

            <div className="">
              <h3 className="text-neutral-darkBrown font-medium">Secure payment</h3>
              <p className="text-neutral-warmGray text-sm">Shop with confidence every time</p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Services;