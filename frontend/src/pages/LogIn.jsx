import React from "react";
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaMailBulk } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function LogIn() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const [showPassWord, setShowPassWord] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await setPersistence(auth, data.rememberMe ? browserLocalPersistence : browserSessionPersistence);
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        data.email,
        data.password
      );
      const user = userCredential.user;
      setMessage("Logged In Successfully!");
      setMessageType("success");

      reset();

      setTimeout(() => {
        navigate("/");
      }, 3000);
   
    } catch (error) {
      console.log("An error occured:", error.message);
      setMessage(`${error.message}`);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center min-h-screen max-w-lg md:max-w-xl lg:max-w-2xl mx-auto py-6 px-4 md:px-10">
        <div className="space-y-12 md:space-y-16">

          <h2 className="text-neutral-darkBrown font-medium text-3xl xl:text-[2.5rem] text-center md:text-left">
            Log In
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="py-2.5 md:py-4 px-10 rounded-[2.5rem] text-neutral-darkBrown border-[0.125rem] border-neutral-warmGray
                   placeholder:text-neutral-warmGray focus:outline-none focus:border-neutral-darkestBrown w-full bg-neutral-ivory" 
                    {...register("email", {
                      required: "This field is required!"
                    })}
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-4">
                    <FaMailBulk className="w-4 h-4 text-neutral-lightBrown"/>
                  </div>
                </div>
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )} 
              </div>

              <div className="">
                <div className="relative">
                  <input 
                    type={showPassWord ? 'text' : 'password'} 
                    placeholder="password"
                    autoComplete="current-password"
                    className="py-2.5 md:py-4 px-10 rounded-[2.5rem] text-neutral-darkBrown border-[0.125rem] border-neutral-warmGray
                  placeholder:text-neutral-warmGray focus:outline-none focus:border-neutral-darkestBrown w-full bg-neutral-ivory"
                    {...register("password", {
                      required: "This field is required"
                    })}
                  />

                  <span 
                    onClick={() => setShowPassWord(!showPassWord)}
                    className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-6"
                  >
                    {showPassWord ? <FaEyeSlash className="w-6 text-neutral-lightBrown" /> : <FaEye className="w-6 text-neutral-lightBrown" />}
                  </span>

                  <div className="absolute top-1/2 -translate-y-1/2 left-4">
                    <FaLock className="w-4 h-4 text-neutral-lightBrown" />
                  </div>
                </div>
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 pl-5 py-2 justify-between">
              <div className="flex items-center gap-2">
                <div className="">
                  <input 
                    type="checkbox" 
                    defaultChecked={true}
                    className="scale-125 cursor-pointer accent-neutral-lightBrown"
                    {...register("rememberMe")}
                  />
                </div>
                
                <div className="text-neutral-lightBrown text-sm md:text-base">
                  Remember me
                </div>
              </div>
        
              <div className="">
                <Link to="/forgot-password">
                  <span className="underline text-neutral-red transition-colors font-medium duration-300 hover:text-neutral-darkBrown text-sm md:text-base">
                    Forgot Password?
                  </span>
                </Link>
              </div>
            </div>

            <div className="">
              <button
                type="submit" 
                disabled={loading}
                className={`bg-neutral-darkBrown text-center py-3 md:py-4 w-full px-5 rounded-[2.5rem] xl:text-lg text-neutral-light
                transition-all duration-300 hover:bg-neutral-warmGray cursor-pointer
                ${loading ? "opacity-70 cursor-not-allowed" : ''}`}
              >
                {loading ? "Logging in..." : 'Log In'}
              </button>
            </div>

            {message && (
              <div className="flex justify-center items-center">
                <p className={` ${
                  messageType === "success" ? "text-green-600" : "text-neutral-red"
                }`}>
                  {message}
                </p>
              </div>
            )}
          </form>

          <div className="flex justify-between items-center">
            <p className="text-neutral-darkBrown">
              Don't have an account?
            </p>

            <div className="">
              <Link to="/signup" className="underline hover:no-underline font-medium">Sign up</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogIn;