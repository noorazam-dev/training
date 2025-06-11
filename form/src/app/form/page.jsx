"use client";
import Image from "next/image";

function FormPage() {
  function submitHandler(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <div className="flex w-full shadow-2xl rounded-2xl overflow-hidden">
      <div className="w-7/10">
        <Image
          src="/images/main.jpg"
          height={800}
          width={800}
          alt="img"
          className="h-full w-full"
        />
      </div>
      <form
        className="w-3/10 flex flex-col justify-center px-24 gap-4 shadow-2xl bg-white text-black"
        onSubmit={(e) => submitHandler}
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
        <button type="submit" className="w-32 bg-black text-white py-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
}

export default FormPage;
