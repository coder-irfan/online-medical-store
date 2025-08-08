import React from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function SignUp() {
  const {register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const password = watch("password");

  const [showPassWord, setShowPassWord] = useState(false);
  const [showConfirmPassWord, setShowConfirmPassWord] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;
      setMessage("Account Created Successfully!");
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
      setLoading(false)
    }
  }

  return (
    <>
      <section className="flex justify-center items-center min-h-screen max-w-lg md:max-w-xl lg:max-w-2xl mx-auto py-6 px-4 md:px-10">
        <div className="space-y-12 md:space-y-16">

          <h2 className="text-neutral-darkBrown font-medium text-3xl xl:text-[2.5rem] text-center md:text-left">
            Sign Up
          </h2>
          

          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
              <div className="">
                <div className="">
                  <input 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name" 
                    className="input" 
                    {...register("firstname", {required: "This field is required!"})}
                  />
                </div>
                {errors.firstname && (
                  <p className="error">{errors.firstname.message}</p>
                )}
              </div>


              <div className="">
                <div className="">
                  <input 
                    autoComplete="off"
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name" 
                    className="input" 
                  />
                </div> 
              </div>
            </div>

            <div className="">
              <div className="">
                <input 
                  autoComplete="new-password"
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  className="input" 
                  {...register("email", {
                    required: "This field is required!",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email."
                    }
                  })}
                />
              </div>

              {errors.email && (
                <p className="error">{errors.email.message}</p>
              )}
            </div>
            

            <div className="">
              <div className="relative">
                <input 
                  type={showPassWord ? 'text' : 'password'}
                  placeholder="Password" 
                  className="input" 
                  autoComplete="new-password"
                  {...register("password", {
                    required: "This field is required!",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                      message: "Password must be at least 8 characters, include uppercase, lowercase, number, and symbol."
                    }
                  })}
                />
                <span 
                  onClick={() => setShowPassWord(!showPassWord)}
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-6"  
                > 
                  {showPassWord ? <FaEyeSlash className="w-6 text-neutral-lightBrown" /> : <FaEye className="w-6 text-neutral-lightBrown" />}
                </span>
              </div>

              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
              

            <div className="">
              <div className="relative">
                <input 
                  type={showConfirmPassWord ? 'text' : 'password'} 
                  placeholder="Confirm Password" 
                  className="input" 
                  autoComplete="new-password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password!",
                    validate: (value) => (value) === password || "Password did not match!"
                  })}
                />
                <span 
                  onClick={() => setShowConfirmPassWord(!showConfirmPassWord)}
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-6"
                >
                  {showConfirmPassWord ? <FaEyeSlash className="w-5 text-neutral-lightBrown" /> : <FaEye className="w-5 text-neutral-lightBrown" />}
                </span>
              </div>

              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>
              

            <div className="">
              <div className="flex items-center gap-2 pl-5 py-2">
                <input 
                  type="checkbox" 
                  name="checkbox" 
                  className="scale-125 cursor-pointer accent-neutral-lightBrown"
                  {...register("checkbox", {
                    required: "You must agree to the terms!"
                  })}
                />

                <div className="text-neutral-warmGray">
                  I Agree with <b>privacy</b> and <b>policy</b>
                </div> 
              </div>
              {errors.checkbox && (
                <p className="error">{errors.checkbox.message}</p>
              )}
            </div>
            

            <div className="">
              <button
                type="submit" 
                className={`bg-neutral-darkBrown text-center py-3 md:py-4 w-full px-5 rounded-[2.5rem] xl:text-lg text-neutral-light
                transition-all duration-300 hover:bg-neutral-warmGray cursor-pointer
                ${loading ? "opacity-70 cursor-not-allowed" : ''}`} 
              >
                {loading ? "Signing Up..." : "Sign Up" }
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
              Already have an account?
            </p>

            <div className="">
              <Link to="/login" className="underline hover:no-underline font-medium">Log In</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp;