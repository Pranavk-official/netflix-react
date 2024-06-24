import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form>
          {signState === "Sign Up" ? (
            <input type="text" name="name" placeholder="Your Name" />
          ) : (
            <></>
          )}

          <input type="email" name="email" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Your Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Already Have an Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          ) : (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
