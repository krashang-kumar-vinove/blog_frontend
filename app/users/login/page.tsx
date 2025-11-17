"use client";

import { useState } from "react";
import { apiPost } from "../../../lib/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // for signup
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || !password || (!isLogin && !name)) {
      MySwal.fire({
        icon: "warning",
        title: "Please fill all fields",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    setLoading(true);
    try {
      const endpoint = isLogin ? "/users/login" : "/users/users";
      const payload = isLogin ? { email, password } : { name, email, password };
      const res: any = await apiPost(endpoint, payload);

      if (isLogin) localStorage.setItem("authToken", res.token);
      MySwal.fire({
        icon: "success",
        title: isLogin ? "Login successful!" : "Signup successful!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });

      setEmail("");
      setPassword("");
      setName("");
      if (!isLogin) setIsLogin(true); // switch to login after signup
    } catch (err: any) {
      MySwal.fire({
        icon: "error",
        title: err.message || "Something went wrong",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl animate-fadeIn">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-xl font-semibold ${
              isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-xl font-semibold ${
              !isLogin
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Signup
          </button>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        {/* Signup only field */}
        {!isLogin && (
          <div className="relative w-full mb-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600">
              Full Name
            </label>
          </div>
        )}

        {/* Email */}
        <div className="relative w-full mb-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600">
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative w-full mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600">
            Password
          </label>
        </div>

        {/* Submit Button */}
        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
        >
          {loading
            ? isLogin
              ? "Logging in..."
              : "Signing up..."
            : isLogin
            ? "Login"
            : "Signup"}
        </button>
      </div>
    </div>
  );
}
