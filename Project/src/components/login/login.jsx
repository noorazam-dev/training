"use client";
import Image from "next/image";
import styles from "./login.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Input from "@/commonComponents/uikit/input";
import ButtonComp from "@/commonComponents/uikit/button";

function LoginPage() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formImage}>
          <Image
            src="/images/mosquelogin.jpg"
            height={500}
            width={500}
            alt="img"
            loading="lazy"
            priority={false}
            className="image"
          />
        </div>
        <form className={styles.formContent} onSubmit={submitHandler}>
          <h1 className={styles.formTitle}>Login to Your Account</h1>

          <div className={styles.formGroup}>
            <Input type={"email"} name={"email"} placeholder={"email"} />
            <Input
              type={"password"}
              placeholder={"password"}
              name={"password"}
            />
          </div>

          <Link href="/forgot-password" className={styles.forgotPassword}>
            Forgot Password
          </Link>

          <p>
            Don't have an account?
            <Link href="/signup" className={styles.signUp}>
              Sign up
            </Link>
          </p>

          <div className="btn">
            <ButtonComp
              name={"Login & Continue"}
              className={styles.submitBtn}
            />
            <ButtonComp
              name={"Sign In with Google"}
              className={styles.googleBtn}
              icon={<FcGoogle className={styles.googleIcon} />}
            />
            {/* <button type="button" className={styles.googleBtn}>
              <FcGoogle className={styles.googleIcon} />
              Sign In with Google
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
