import React from "react";

function Services() {
  return (
    <>
      <section className="px-4 py-10 bg-neutral-paleBeige">
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10">
          <div className="flex flex-col items-center gap-2">
             <img src="images/truck-fast.svg" alt="truck-icon" className="w-10 h-10" />
             <h3 className="text-sm text-neutral-darkBrown">Free shipping</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
             <img src="images/exchange-dollar.svg" alt="exchange-icon" className="w-10 h-10" />
             <h3 className="text-sm text-neutral-darkBrown">Easy refund</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
             <img src="images/headphone-mic.svg" alt="headphone-icon" className="w-10 h-10" />
             <h3 className="text-sm text-neutral-darkBrown">Online support</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
             <img src="images/credit-card.svg" alt="credit-card-icon" className="w-10 h-10" />
             <h3 className="text-sm text-neutral-darkBrown">FLexible payment</h3>
          </div>
         
        </div>
      </section>
    </>
  )
}

export default Services;