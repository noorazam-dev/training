"use client";
import Image from "next/image";
import { useState } from "react";
import "../styles/FormPage.scss";

function FormPage() {
  const [formData, setFormData] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-image">
          <Image
            src="/images/main.jpg"
            height={500}
            width={500}
            alt="img"
            className="image"
          />
        </div>
        <form className="form-content" onSubmit={submitHandler}>
          <h1 className="form-title">Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email" name="email" />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name="password" />
            <hr />
          </div>
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
