/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

export default function BookAnEventLoginPage() {
  const router = useRouter();
  const [bookAnEventUser, setBookAnEventUser] = useState({
    email: "",
    password: "",
  });

  const onBookAnEventUserLogin = async () => {
    try {
      const response = await axios.post("/api/user/BookAnEventLogin", bookAnEventUser);
      console.log("Login success", response.data);

      if (response.data.success) {
        alert("Successfully Logged In");
        router.push("/BookAnEventProfile");
      } else {
        console.log("Login failed - User not registered.");
        alert("You have not yet registered. Please Sign up.");
      }
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="py-16 mt-36">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/LCdvKYf/11.png')" }}></div>
        <div className="w-full p-8 lg:w-1/2">
        <img src="https://i.ibb.co/9gCbPKK/logo.png" alt="logo" className="mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-700 text-center"></h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path d="... your path here ..." fill="#FFC107" />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
          </a>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <Link href="/loginWithEmail" className="text-xs text-center text-gray-500 uppercase">or login with email</Link>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-black rounded py-2 px-4 block w-full appearance-none"
              type="email"
              onChange={(e) => setBookAnEventUser({ ...bookAnEventUser, email: e.target.value })}
              required
              autoComplete="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <a href="#" className="text-xs text-gray-500">Forget Password?</a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-black rounded py-2 px-4 block w-full appearance-none"
              type="password"
              onChange={(e) => setBookAnEventUser({ ...bookAnEventUser, password: e.target.value })}
              required
              autoComplete="password"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={onBookAnEventUserLogin}
              className="bg-blue text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href="/BookAnEvent/signup" className="text-xs text-black uppercase">or sign up</Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
