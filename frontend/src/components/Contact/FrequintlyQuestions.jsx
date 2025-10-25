import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "1",
    question: "What products do you offer?",
    answer:
      "We offer a wide range of medical supplies, including prescription medications, over-the-counter products, supplements, and personal care items.",
  },

  {
    id: "2",
    question: "How can I place an order?",
    answer:
      "You can place an order directly through our website by browsing products, adding them to your cart, and completing the checkout process with your preferred payment method.",
  },

  {
    id: "3",
    question: "Do you provide home delivery?",
    answer:
      "Yes, we offer fast and reliable home delivery services. Once your order is confirmed, it will be delivered to your doorstep within the estimated delivery time.",
  },

  {
    id: "4",
    question: "Can I return or exchange products?",
    answer:
      "Yes, we have a flexible return and exchange policy. If a product is damaged or incorrect, you can request a return or exchange within a specified time frame. Please check our return policy page for details.",
  },
];

function FrequintlyQuestions() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFaq = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 xl:px-32 pb-16 md:pb-20 xl:pb-28">
        <div className="space-y-10 md:space-y-14">
          <div className="max-w-[420px] mx-auto text-center">
            <h2 className="text-neutral-darkBrown font-medium text-xl sm:text-xl md:text-[clamp(1.5rem,4vw,3rem)] md:leading-[1.2]">
              Frequently Asked Questions{" "}
              <img
                src="images/question-circle.svg"
                alt="question-icon"
                className="inline-block w-6 h-6 md:w-12 md:h-12 lg:w-16"
              />
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {faqs.map((faq, index) => {
              const isOpened = isOpen === index;
              return (
                <div
                  key={faq.id}
                  className="border border-neutral-lightBrown rounded-lg max-w-[700px] mx-auto p-4 md:p-5  cursor-pointer transition-all duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpened ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={
                          isOpened
                            ? "images/x-icon.svg"
                            : "images/plus-icon.svg"
                        }
                        alt={isOpened ? "close" : "plus"}
                        className="w-5 h-5"
                      />
                    </motion.div>
                    <h3 className="text-neutral-darkBrown font-medium md:text-lg xl:text-xl">
                      {faq.question}
                    </h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="text-neutral-warmGray pt-5">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FrequintlyQuestions;
