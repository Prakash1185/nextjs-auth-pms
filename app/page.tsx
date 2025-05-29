"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-gray-500">
      <h1>I am home</h1>
      <button
        onClick={logoutHandler}
        className="bg-red-500 px-2 py-1 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
