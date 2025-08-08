import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      setMessage("Submited successfully!");
      setTimeout(() => {
        setMessage("");
      }, 5000);

      setMessageType("success");
      reset();
    } catch {
      setMessage("Failed to submit! Try again");
      setMessageType("error");
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <section className="pt-32 md:pt-40 xl:pt-48  max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 md:px-10
        pb-20 md:pb-28 lg:pb-32">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-6">
              <h2 className="text-center text-neutral-darkBrown font-medium text-2xl md:text-[clamp(1rem,6vw,3.5rem)] sm:leading-[1.1]">
                Contact Us
              </h2>

              <img src="images/phone-icon.svg" alt="phone" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </div>

            <p className="text-neutral-warmGray">
              Have questions or need support? Get in touch with our team – we're here to help!
            </p>
          </div>

          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="space-y-2 w-full sm:w-1/2">
                  <label className="text-neutral-lightBrown text-sm">Full Name</label>
                  <div className="relative">
                    <input 
                      type="text"
                      className="contact-input"
                      {...register("fullname", {
                        required: "This field is required!"
                      })}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                      <img src="images/person.svg" alt="person" className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.fullname && (
                    <p className="error">{errors.fullname.message}</p>
                  )}
                </div>

                <div className="space-y-2 w-full sm:w-1/2">
                  <label className="text-neutral-lightBrown text-sm">Email Address</label>
                  <div className="relative">
                    <input 
                      type="email"
                      className="contact-input"
                      {...register("email", {
                        required: "This field is required!",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email."
                        }
                      })}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                      <img src="images/email-icon.svg" alt="email" className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="space-y-2 w-full sm:w-1/2">
                  <label className="text-neutral-lightBrown text-sm">Phone Number</label>
                  <div className="relative">
                    <input 
                      type="tel"
                      className="contact-input"
                      {...register("tel", {
                        required: "This field is required!",
                        pattern: {
                          value: /^[\d+ ]+$/,
                          message: "Enter a valid phone number"
                        },
                        maxLength: {
                          value: 15,
                          message: "Phone number is too long"
                        },
                        minLength: {
                          value: 8,
                          message: "Phone number is too short"
                        }
                      })}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                      <img src="images/tellephone.svg" alt="phone" className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.tel && (
                    <p className="error">{errors.tel.message}</p>
                  )}                  
                </div>

                <div className="space-y-2 w-full sm:w-1/2">
                  <label className="text-neutral-lightBrown text-sm">Preferred Call Time</label>
                  <div className="relative"> 
                    <input 
                      type="datetime-local"
                      className="contact-input"
                      {...register("schedule", {
                        required: "This field is required!"
                      })}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                      <img src="images/clock.svg" alt="clock" className="w-5 h-5" />
                    </div>
                  </div>
                  {errors.schedule && (
                    <p className="error">{errors.schedule.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-neutral-lightBrown text-sm">Message</label>
                <div className="relative">
                  <textarea
                    className="px-10 py-1.5 rounded-lg text-neutral-darkBrown border-[0.125rem] border-neutral-warmGray
                    focus:outline-none focus:border-neutral-darkestBrown w-full min-h-52 lg:min-h-64 resize-none bg-neutral-ivory"
                    {...register("textmessage", {
                      required: "This field is required!"
                    })}
                  />
                  <div className="absolute top-3 left-3">
                    <img src="images/message.svg" alt="message" className="w-4 h-4" />
                  </div>
                </div>
                  {errors.textmessage && (
                    <p className="error">{errors.textmessage.message}</p>
                  )}
              </div>

              <button
                type="submit"
                className={`bg-neutral-darkBrown text-center py-3 w-full max-w-60 px-5 rounded-lg xl:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray flex items-center justify-center
                  ${loading ? "opacity-70 cursor-not-allowed" : ''}`}
              >
                {loading ? "Submitting..." : "Submit"}
                <img src="images/hand-pointer.svg" alt="pointer-hand" className="pl-2" />
              </button>

              {message && (
                <p className={`text-center ${
                  messageType === "success" ? "text-green-600" : "bg-neutral-red"
                }`}>
                  {message}
                </p>
              )}

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm;