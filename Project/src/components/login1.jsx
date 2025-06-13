"use client";
import Image from "next/image";
import "../styles/login1.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-image">
          <Image
            src="/images/mosquelogin.jpg"
            height={500}
            width={500}
            alt="img"
            className="image"
          />
        </div>
        <form className="form-content" onSubmit={(e) => submitHandler(e)}>
          <h1 className="form-title">Login to Your Account</h1>
          <div className="form-group">
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
          </div>
          <Link href="#" className="forgot-paasword">
            Forgot Password
          </Link>
          <p>
            Don't have an acoount?{" "}
            <Link href="#" className="sign-up">
              Sign up
            </Link>
          </p>
          <div className="btn">
            <button type="submit" className="submit-btn">
              Login & Continue
            </button>
            <button className="google-btn">
              <FcGoogle className="google-icon" />
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
