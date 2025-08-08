import React from "react";

function FollowUs() {
  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 py-12 md:py-20 xl:py-28">
        <div className="text-center space-y-10 lg:space-y-16">
          <h2 className="text-neutral-darkBrown font-medium text-2xl lg:text-3xl xl:text-[2.5rem]">
            Follow us @medifit
          </h2>

          <div className="flex items-start gap-2 xl:gap-6 justify-center">
            <div className="">
              <img src="images/group-of-bills1.svg" alt="bills" className="" />
            </div>
            <div className="relative">
              <img src="images/group-of-bills2.svg" alt="bills" />
              <img src="images/instagram-medifit.svg" alt="" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 sm:w-24" />
            </div>
            <div className="">
              <img src="images/group-of-bills3.svg" alt="bills" className="" />
            </div>        
            <div className="">
              <img src="images/group-of-bills4.svg" alt="bills" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FollowUs;