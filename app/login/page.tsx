"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(true);
  const router = useRouter()

  const submitHandler = async () => {
    try {
      const response = await axios.post('/api/users/login',user)
      router.push("/")
      toast.success(response.data.message)
    } catch (error:any) {
      toast.error(error.response.data.message)
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center text-black">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="font-bold">LOGIN</h1>
        <div className="flex flex-col my-4">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
          />
        </div>
        <button
        onClick={submitHandler}
          className={`${
            disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#ff698f]"
          }  w-full py-1 my-2 rounded-md text-white`}
        >
          Login
        </button>
        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} className="font-medium hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
