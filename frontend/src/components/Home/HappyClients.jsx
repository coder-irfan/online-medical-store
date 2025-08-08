import React from "react";

const clients = [
  {
    id: '1',
    text: 'Fast delivery, authentic medicines, and great support. This is my go-to online pharmacy. Trustworthy and reliable every time!',
    img: 'images/client1.svg',
    name: 'James Wilson',
    job: 'Manager',
    rates: '5/5',
    star: 'images/5-filled-stars.svg',
  },

  {
    id: '2',
    text: 'I love how easy it is to find what I need. Affordable prices and professional service. Highly recommended!',
    img: 'images/client2.svg',
    name: 'Henry Adams',
    job: 'CEO',
    rates: '4/5',
    star: 'images/4-filled-stars.svg',
  },

  {
    id: '3',
    text: 'Excellent packaging and timely delivery. The customer service team really cares. A great experience from start to finish.',
    img: 'images/client3.svg',
    name: 'Ethan Harris',
    job: 'Business manager',
    rates: '5/5',
    star: 'images/5-filled-stars.svg',
  },

  {
    id: '4',
    text: 'Convenient, fast, and dependable. This store makes getting medical supplies stress-free. I’ll definitely order again!',
    img: 'images/client4.svg',
    name: 'Lily Baker',
    job: 'Product manager',
    rates: '4/5',
    star: 'images/4-filled-stars.svg',
  },
]

function HappyClients() {
  return (
    <>
      <section className="bg-neutral-paleBeige px-4 md:px-10 lg:px-20 py-12 md:py-20 xl:py-28">
        <div className="space-y-10 md:space-y-16">
          <h2 className="text-neutral-darkBrown font-medium text-3xl xl:text-[2.5rem] text-center">
            Our happy clients
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 place-items-center">
            {clients.map((client, id) => (
              <div key={id} className="flex flex-col justify-between bg-neutral-light p-5 max-w-[500px] min-h-56 space-y-6 rounded-md sm:rounded-xl">
                
                <div className="">
                  <p className="text-neutral-lightBrown lg:text-lg">
                    {client.text}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-3">

                    <img 
                      src={client.img} 
                      alt={client.name} 
                      className="rounded-full outline-dotted outline-neutral-darkBrown sm:w-12 md:w-16"
                    />

                    <div className="">
                      <h3 className="text-neutral-darkestBrown ">
                        {client.name}
                      </h3>

                      <span className="text-neutral-lightBrown text-sm sm:text-xs md:text-sm">
                        {client.job}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="sm:text-xs md:text-sm">
                      {client.rates}
                    </span>

                    <img src={client.star} alt="star-icons" className="w-20 lg:w-full"/>
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

export default HappyClients;