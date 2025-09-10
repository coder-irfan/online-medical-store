import React from "react";

function Hero() {
  return (
    <>
      <section className="relative bg-neutral-paleBeige pt-32 lg:pt-40 pb-16 md:pb-20 px-4 md:px-10 lg:px-20 xl:px-32">
        <img 
          src="images/medical-shape.svg" 
          alt="medical-shape" 
          className="absolute bottom-0 left-0 w-full max-w-12 sm:max-w-20 lg:max-w-28"
        />

        <div className="text-center space-y-8 lg:space-y-16">
          <h2 className="max-w-4xl mx-auto text-neutral-darkBrown font-medium text-xl sm:text-2xl md:text-[clamp(1rem,6vw,3rem)] sm:leading-[1.1]">
            Health products you can trust service you deserve
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-start gap-4">
            <img 
              src="images/woman-checking-medicins.svg" 
              alt="woman-checking-medicins" 
              className="w-full max-h-[250px] sm:max-h-[350px] max-w-[500px] mx-auto sm:mx-0 object-cover rounded-md" height={581} width={552} 
            />

            <img 
              src="images/woman-grabbing-pill.jpg" 
              alt="woman-grabbing-pill"
              className="w-full max-h-[250px] sm:max-h-[350px] max-w-[500px] mx-auto sm:mx-0 object-cover rounded-md object-top" height={333} width={362} 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;