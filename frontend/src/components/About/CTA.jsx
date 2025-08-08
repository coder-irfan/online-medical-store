import React from "react";
import { Link } from "react-router-dom";

function CTA({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <section className="py-10 md:py-20 xl:py-28 px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-10 bg-neutral-light py-8 px-4 md:p-6 lg:p-8
          rounded-md">
          <div className="max-w-[450px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto space-y-4 lg:space-y-8 text-center md:text-left">
            <h2 className="text-neutral-darkBrown font-medium text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.7rem] md:leading-[1.3]">
              Empower your wellness journey with Medifit
            </h2>

            <p className="text-neutral-warmGray lg:text-lg md:pr-10">
              Thanks for being part of our community — together, let's continue the journey toward better health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-2 place-items-center gap-x-4 md:gap-x-6 xl:gap-x-8">
            <img src="images/about-section-pill1.svg" alt="pills" className="rounded-md"/>
            <img src="images/about-section-pill2.svg" alt="pills" className="rounded-md" />
            <img src="images/about-section-pill3.svg" alt="pills" className="rounded-md" />
            <img src="images/about-section-pill4.svg" alt="pills" className="rounded-md" />
          </div>
        </div>
      </section>
    )
  }
  return (
    <> 
      <section className="py-10 md:py-20 xl:py-28 px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-10 bg-neutral-light py-8 px-4 md:p-6 lg:p-8
          rounded-md">
          <div className="max-w-[450px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto space-y-4 lg:space-y-8 text-center md:text-left">
            <h2 className="text-neutral-darkBrown font-medium text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.7rem] md:leading-[1.3]">
              Join our trustable Medifit product community
            </h2>

            <p className="text-neutral-warmGray lg:text-lg md:pr-10">
              Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
            </p>

            <div className="pt-4 xl:pt-6 flex items-center justify-center md:justify-start">
              <Link to="/signup">
                <button className="bg-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-xl lg:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray">
                  Get Started
                  <img src="images/sign-up-icon.svg" alt="signUp-icon" className="w-5 h-5"/>
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 place-items-center gap-x-4 md:gap-x-6 xl:gap-x-8">
            <img src="images/about-section-pill1.svg" alt="pills" className="rounded-md"/>
            <img src="images/about-section-pill2.svg" alt="pills" className="rounded-md" />
            <img src="images/about-section-pill3.svg" alt="pills" className="rounded-md" />
            <img src="images/about-section-pill4.svg" alt="pills" className="rounded-md" />
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA;