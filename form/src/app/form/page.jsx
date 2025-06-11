"use client";
import Image from "next/image";
import { useState } from "react";

function FormPage() {
  const [formData, setFormData] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <div className="p-10 bg-black h-screen flex">
      <div className="flex w-full shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-7/10 hidden lg:block lg:w-6/10">
          <Image
            src="/images/main.jpg"
            height={900}
            width={900}
            alt="img"
            className="h-full w-full"
          />
        </div>
        <form
          className="w-full lg:w-4/10 flex flex-col justify-center px-4 md:px-24 gap-4 shadow-2xl bg-white text-black "
          onSubmit={(e) => submitHandler(e)}
        >
          <h1 className="text-4xl">Login</h1>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="mt-1 text-xl focus:border-none focus:outline-none"
            />
            <hr />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="mt-1 text-xl focus:border-none focus:outline-none"
            />
            <hr />
          </div>
          <button
            type="submit"
            className="w-32 bg-black text-white py-2 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
