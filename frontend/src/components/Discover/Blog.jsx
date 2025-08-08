import React from "react";

const insights = [
  {
    id: '1',
    img: 'images/orange-pills-spread.svg',
    icon: 'images/calender.svg',
    date: 'July 26, 2025',
    description: 'Living well with chronic conditions'
  },

  {
    id: '2',
    img: 'images/man-showing-pills.svg',
    icon: 'images/calender.svg',
    date: 'July 26, 2025',
    description: 'Strength home-based fitness essential'
  },
]

function Blog() {
  return (
    <>
      <section className="pb-16 md:pb-24 lg:pb-32 lg:pt-10 pt-8 px-4 md:px-10 lg:px-20 xl:px-32 scroll-mt-24" id="insight">
        <div className="space-y-10 xl:space-y-16">
          <h2 className="text-neutral-darkBrown font-medium text-2xl lg:text-3xl xl:text-[2.5rem] text-center md:text-left">
            Healthcare Insights
          </h2>

          <div className="flex flex-col max-w-lg mx-auto items-center md:max-w-full md:flex-row md:justify-between gap-6 md:gap-10 xl:gap-16">
            {insights.map((insight, id) => (
              <div key={id} className="flex gap-4 xl:gap-6">
                <div className="">
                  <img src={insight.img} alt="pills" className="max-w-full w-[300px] md:w-[500px] rounded-lg" />
                </div>

                <div className="space-y-6 xl:space-y-10">
                  <div className="flex items-center gap-2">
                    <img src={insight.icon} alt="calender" />

                     <span className="text-neutral-lightBrown text-sm">
                      {insight.date}
                    </span>
                  </div>

                  <div className="">
                   <h3 className="text-neutral-darkBrown font-medium md:text-base lg:text-xl">
                    {insight.description}
                   </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog;