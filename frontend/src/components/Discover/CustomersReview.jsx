import React from "react";

const customers = [
  {
    id: '1',
    icon: 'images/message-icon.svg',
    text: 'B12 Medicine keeps me energized and focused all day. A true lifesaver for vitality and wellness!',
    img: 'images/woman-white-shirt-with-her-arms-crossed.svg',
    name: 'Olivia Garcia',
  },

  {
    id: '2',
    icon: 'images/message-icon.svg',
    text: 'I’ve regained my energy and feel amazing thanks to B12 Medicine. Highly recommend for health and stamina!',
    img: 'images/woman-with-her-arms-crossed-smiling.svg',
    name: 'Sophia Brown',
  },

  {
    id: '3',
    icon: 'images/message-icon.svg',
    text: 'As a vegetarian, B12 Medicine keeps my energy up and my health on track. Perfect for natural support!',
    img: 'images/handsome-confident-smiling-man-with-hands-crossed-chest.svg',
    name: 'Monty Graffin',
  },
]

function CustomersReview() {
  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 py-12 md:py-20 xl:py-28 scroll-mt-24" id="customer-reviews">
        <div className="space-y-10 md:space-y-20">
          <h2 className="text-neutral-darkBrown font-medium text-3xl xl:text-[2.5rem] text-center">
            Customers Review
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 xl:gap-8">
            {customers.map((customer, id) => (
              <div key={id} className="flex flex-col gap-4 xl:gap-6">
                <div className=" bg-neutral-light p-5 max-w-[400px] min-h-44 space-y-2 rounded-3xl rounded-bl-none">
                  <img src={customer.icon} alt="message-icon" className="w-8" />
                  <p className="text-neutral-lightBrown lg:text-lg">
                    {customer.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={customer.img} alt={customer.name} className="rounded-full w-12" />
                  <span className="text-neutral-darkestBrown ">
                    {customer.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomersReview;