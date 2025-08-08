import React from "react";

function Categories() {
  return (
    <>
      <section className="bg-neutral-paleBeige px-4 md:px-10 lg:px-20 py-8 md:py-12 xl:py-16">
        <div className="flex items-center justify-around gap-6">
          <img src="images/health-care.svg" alt="health-care" className="max-w-20 lg:max-w-24 w-full h-12 sm:h-14 lg:h-20" />
          <img src="images/beauty-care.svg" alt="beauty-care" className="max-w-20 lg:max-w-24 w-full h-12 sm:h-14 lg:h-24" />
          <img src="images/fitness.svg" alt="fitness" className="max-w-20 lg:max-w-20 w-full h-12 sm:h-14 lg:h-16" />
          <img src="images/medicine.svg" alt="medicine" className="max-w-20 lg:max-w-20 w-full h-12 sm:h-14 lg:h-20" />
        </div>
      </section>
    </>
  )
}

export default Categories;