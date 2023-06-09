import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Login = ({setUser}) => {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/");
    }
  }, []);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const userLog = {
      identifier:email,
      password,
    };

    try {
      const res = await axios.post("http://127.0.0.1:1337/api/auth/local", userLog);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.jwt);
      console.log(JSON.parse(localStorage.getItem("user")));
      setUser(JSON.parse(localStorage.getItem("user")));
      router.push("/");
    } catch (error) {
      alert(error.response.data.error.message);
    }

  }
  return (
    <div className="md:px-56 my-2 md:my-11">
      <div className="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className=" text-3xl text-center font-bold text-blue-700">Log in</h1>
          <p className="text-gray-500">Login to access your account</p>
        </div>
        <div className="relative mt-2 w-full">
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm  text-black focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-7 scale-75 transform cursor-text select-none px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:px-2 peer-focus:text-yellow-500"
          >
            {" "}
            Enter Your Email{" "}
          </label>
        </div>
        <div className="relative mt-2 w-full">
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm  text-black focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-7 scale-75 transform cursor-text select-none px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:px-2 peer-focus:text-yellow-500"
          >
            {" "}
            Enter Your Password
          </label>
        </div>
        <button onClick={handleLogin} type="submit" className="rounded-lg bg-blue-700 py-3 font-bold  text-black">
          Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link href="/signup" class="text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
