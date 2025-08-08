import React from "react";

function Footer() {
  return (
    <>
      <footer className="px-4 md:px-10 lg:px-20 pt-12 pb-8 md:pt-16 xl:pt-20 xl:pb-10 bg-neutral-paleBeige space-y-10">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-16 lg:gap-10">
            <div className="flex justify-around lg:justify-center gap-10">
              <div className="space-y-5 xl:space-y-8">
                <h3 className="text-neutral-darkBrown font-medium text-lg md:text-xl xl:text-2xl">
                  Pages
                </h3>

                <ul className="space-y-2 xl:space-y-3">
                  <li><a href="" className="footer-link">Home</a></li>
                  <li><a href="" className="footer-link">Shop</a></li>
                  <li><a href="" className="footer-link">About</a></li>
                  <li><a href="" className="footer-link">Contact</a></li>
                  <li><a href="" className="footer-link">Blog</a></li>
                  <li><a href="" className="footer-link">Privacy Policy</a></li>
                  <li><a href="" className="footer-link">FAQs</a></li>
                </ul>
              </div>

              <div className="space-y-5 xl:space-y-8">
                <h3 className="text-neutral-darkBrown font-medium text-lg md:text-xl xl:text-2xl">
                  Utility
                </h3>

                <ul className="space-y-2 xl:space-y-3">
                  <li><a href="" className="footer-link">Style guide</a></li>
                  <li><a href="" className="footer-link">Instruction</a></li>
                  <li><a href="" className="footer-link">Changelog</a></li>
                  <li><a href="" className="footer-link">Licences</a></li>
                  <li><a href="" className="footer-link">Link in bio</a></li>
                  <li><a href="" className="footer-link">Medicins</a></li>
                  <li><a href="" className="footer-link">Media</a></li>
                </ul>
              </div>
            </div>
            
            <div className="max-w-80 flex flex-col items-center justify-center self-center lg:self-auto text-center space-y-6">
              <div className="flex items-start md:items-center gap-1">
                <img 
                  src="images/logo.svg" 
                  alt="logo" 
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
                <span className="text-3xl md:text-[2.7rem] lg:text-[3.5rem] xl:text-[4.5rem] font-medium text-neutral-darkBrown">Medifit</span>
              </div>

              <p className="text-neutral-warmGray lg:text-lg">
                We provides the ultimate solution for your online store and all the healthcare needs.
              </p>

              <div className="flex items-center gap-4">
                <img src="images/facebook.svg" alt="facebook" className="footer-media" />
                <img src="images/instagram.svg" alt="instagram" className="footer-media" />
                <img src="images/twitter.svg" alt="twitter" className="footer-media" />
                <img src="images/youtube.svg" alt="youtube" className="footer-media" />
              </div>
            </div>

            <div className="flex flex-col justify-around sm:flex-row lg:flex-col gap-10 sm:gap-20 self-center sm:self-auto">
              <div className="max-w-56 sm:max-w-72 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-2">
                <h3 className="text-neutral-darkBrown font-medium text-lg md:text-xl xl:text-2xl">
                  Address
                </h3>

                <div className="flex items-start sm:gap-2">
                  <img src="images/location-pin.svg" alt="location" className="w-5 mt-1 sm:ml-4 lg:ml-0" />
                  <p className="text-neutral-warmGray lg:text-lg">1640 Parker Rd. Allentown, New Mexico 31134</p>
                </div>
              </div>

              <div className="max-w-56 sm:max-w-72 flex flex-col items-center justify-center text-center lg:items-start gap-2">
                <h3 className="text-neutral-darkBrown font-medium text-lg md:text-xl xl:text-2xl">
                  Contact
                </h3>

                <div className="space-y-2 flex flex-col justify-center items-center lg:items-start lg:justify-start">
                  <div className="flex items-center gap-2">
                    <img src="images/email-icon.svg" alt="email" className="w-5" />
                    <p className="text-neutral-warmGray lg:text-lg">medifit@gmail.com</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src="images/phone-icon.svg" alt="phone" className="w-5" />
                    <p className="text-neutral-warmGray lg:text-lg">(209) 555-0104</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-[0.075rem] bg-neutral-darkBrown" />

        <div className="text-center">
          <p className="text-neutral-darkBrown lg:text-lg">
            &copy; 2025 All Right Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer;