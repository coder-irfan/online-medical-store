import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; 
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function CreatingAccount({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out!');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  }

  if (isLoggedIn) {
    return (
      <section className="my-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-10 lg:px-20 xl:px-32">
          <div className="">
            <img 
              src="images/man-taking-pill.jpg"
              alt="man taking pill" 
              className="w-[630px] max-w-full min-h-[350px] lg:min-h-[450px] xl:min-h-[560px] object-cover rounded-md md:rounded-xl"
              width={560}
              height={630}
            />
          </div>

          <div id="gettingStarted" className="w-[630px] max-w-full min-h-[350px] lg:min-h-[450px] xl:min-h-[560px] flex flex-col justify-around 
            items-center bg-neutral-light py-8 lg:py-14 px-4 text-center rounded-md md:rounded-xl">
            <div className="space-y-3 xl:space-y-6">

              <h2 className="text-neutral-darkBrown font-medium text-2xl lg:text-3xl xl:text-[2.5rem]">
                Welcome Back!
              </h2>
            </div>

            <div className="flex flex-wrap justify-center flex-row items-center gap-4">
              <Link to="/shop" >
                <div className="bg-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-md md:rounded-xl xl:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray cursor-pointer">
                    <button className="flex items-center gap-2">
                      <img src="images/bag.svg" alt="shopping bag" className="" />
                      Proceed Shopping
                    </button>
                </div>
              </Link>

              <div className=" border border-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-md md:rounded-xl xl:text-lg text-neutral-darkestBrown
                transition-all duration-300 hover:bg-neutral-paleBeige cursor-pointer"
                onClick={handleLogOut}>
                  <button className="flex items-center gap-2 text-neutral-darkBrown">
                    <img src="images/sign-up-icon.svg" alt="icon" className="w-5 h-5 brightness-0"/>
                    Log Out
                  </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    ) 
  }
  return (
    <>
      <section className="my-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-10 lg:px-20 xl:px-32">
          <div className="">
            <img 
              src="images/man-taking-pill.jpg"
              alt="man taking pill" 
              className="w-[630px] max-w-full min-h-[350px] lg:min-h-[450px] xl:min-h-[560px] object-cover rounded-md md:rounded-xl"
              width={560}
              height={630}
            />
          </div>

          <div id="gettingStarted" className="w-[630px] max-w-full min-h-[350px] lg:min-h-[450px] xl:min-h-[560px] flex flex-col justify-between 
            items-center bg-neutral-light py-8 lg:py-14 px-4 text-center rounded-md md:rounded-xl">
            <div className="space-y-3 xl:space-y-6">
              <p className="text-neutral-lightBrown font-medium md:text-2xl">
                Join our newsletter
              </p>

              <h2 className="text-neutral-darkBrown font-medium text-2xl lg:text-3xl xl:text-[2.5rem]">
                Sign Up for an Instant 15% Discount
              </h2>
            </div>

            <div className="flex flex-wrap justify-center flex-row items-center gap-4">
              <Link to="/login" >
                <div className="border border-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-md md:rounded-xl xl:text-lg text-neutral-darkestBrown
                  transition-all duration-300 hover:bg-neutral-paleBeige cursor-pointer">
                    <button className="flex items-center gap-2 text-neutral-darkBrown">
                      <FaUser className="w-5 h-5 text-neutral-darkBrown"/>
                      Log In
                    </button>
                </div>
              </Link>

              <Link to="signup">
                <div className="bg-neutral-darkBrown flex items-center gap-3 py-3 px-5 rounded-md md:rounded-xl xl:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray cursor-pointer">
                    <button className="flex items-center gap-2">
                      <img src="images/sign-up-icon.svg" alt="signUp-icon" className="w-5 h-5"/>
                      Sign Up
                    </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreatingAccount;