"use strict";
import React from "react";
import Image from "next/image";
import { useState } from "react";
const index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoggedIn) {
      login();
    } else {
      signup();
    }
  };

  const login = () => {
    // navigate("/welcome");
  };

  const signup = () => {
    console.log("Signup");
  };

  return (
    <section className="flex justify-center items-center min-h-[100svh]">
      <div className="absolute md:top-[5%] top-2 left-2 md:left-[10%] flex justify-center cursor-pointer items-center gap-2 link transition-all duration-300 ease-in-out ">
        <Image src="/logo.svg" width={40} height={30} alt="logo" />
        <p className="text-2xl md:text-[#] font-bold hover:link t">HelpMeOut</p>
      </div>
      <div className="w-[min(90%,600px)] flex flex-col gap-5 py-20">
        <div className="flex justify-center items-center flex-col mb-5">
          <h1 className="text-black font-bold text-3xl mb-4">
            Log in or Sign up
          </h1>
          <p className="max-w-sm text-center text-gray-500 font-light text-sm">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>
        <a className="flex border-[2px] border-black rounded-lg h-[50px] justify-center items-center gap-3 transition-all duration-300 ease-in-out cursor-pointer hover:color-[rgb(73, 9, 191)] cursor-pointer">
          <span>
            <Image src="/google.svg" width={20} height={20} alt="google" />
          </span>
          Continue with Google
        </a>
        <a className="flex border-[2px] border-black rounded-lg h-[50px] justify-center items-center gap-3 transition-all duration-300 ease-in-out cursor-pointer hover:color-[rgb(73, 9, 191)] cursor-pointer">
          <span>
            <Image src="facebook.svg" width={20} height={20} alt="facebook" />
          </span>
          Continue with Facebook
        </a>
        <div className="flex justify-center items-center gap-5 my-10">
          <hr className="border-gray-400 h-[1px] w-full" />
          <p className="text-center">or</p>
          <hr className="border-gray-400 h-[1px] w-full" />
        </div>
        <form className="flex flex-col gap-7 w-full" onSubmit={handleSubmit}>
          <label className="w-full font-semibold">
            Email
            <input
              className="border-[2px] font-normal mt-2 w-full border-gray-400  rounded-lg h-[50px] px-5"
              type="text"
              placeholder="Enter your email address"
            />
          </label>
          <label className="w-full font-semibold">
            Password
            <input
              className="border-[2px] font-normal mt-2 w-full border-gray-400  rounded-lg h-[50px] px-5"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={login}
              className="px-6 py-3 font-light text-white bg-[#120B48] rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:btn-link"
            >
              Log In
            </button>
          ) : (
            <button
              type="button"
              onClick={signup}
              className="px-6 py-3 font-light text-white bg-[#120B48] rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:btn-link"
            >
              Sign Up
            </button>
          )}
          {isLoggedIn ? (
            <p className="flex justify-center gap-2 text-gray-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLoggedIn((p) => !p)}
                className="underline text-[#120B48] font-semibold"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="flex justify-center gap-2 text-gray-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLoggedIn((p) => !p)}
                className="underline text-[#120B48] font-semibold"
              >
                Login
              </button>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default index;
