import {React, useState} from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await sendPasswordResetEmail(auth, email);
      setMessage("Password email sent successfully!");
      setMessageType("success");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <section className="flex justify-center items-center min-h-screen max-w-lg md:max-w-xl lg:max-w-3xl mx-auto py-6 px-4 md:px-10">
        <div className="space-y-8 md:space-y-12 bg-neutral-light py-16 md:py-20 px-10 rounded-lg shadow-lg">
          <h2 className="text-neutral-darkBrown font-medium text-2xl xl:text-3xl text-center">
            Forgot Password?
          </h2>
        
          <form onSubmit={handleReset} className="">
            <div className="space-y-6">
              <input 
                type="email"
                className="input"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="flex items-center justify-between">
                <button 
                  type="submit" 
                  className={`bg-neutral-darkBrown text-center py-3 px-5 md:px-10 rounded-[2.5rem] xl:text-lg text-neutral-light
                  transition-all duration-300 hover:bg-neutral-warmGray cursor-pointer text-sm
                  ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
                >
                  {loading ? 'Sending...' : 'Send Email'}
                </button>

                <Link to="/login">
                  <span className="underline text-sm text-neutral-darkBrown hover:text-neutral-lightBrown">
                    Back to Login
                  </span>
                </Link>
              </div>
              
              {message && (
                <p className={`pt-6 lg:pt-4 text-center text-sm ${
                    messageType === "success" ? "text-green-600" : "text-neutral-red" 
                  }`}>
                  {message}
                </p>
              )}
            </div>
          </form>
        </div> 
      </section>
    </>
  )
}

export default ForgotPassword;