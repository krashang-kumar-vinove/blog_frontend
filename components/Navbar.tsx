"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/users/login");
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 shadow-lg px-6 py-4 flex items-center justify-between text-white">
      {/* Logo */}
      <div className="text-2xl font-bold hover:scale-105 transition-transform cursor-pointer">
        <Link href="/">MyBlog</Link>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 text-lg font-medium">
        {/* <Link href="/posts" className="hover:text-yellow-300 transition-colors">
          Posts
        </Link> */}
        <Link
          href="/posts/create"
          className="hover:text-yellow-300 transition-colors"
        >
          Create Post
        </Link>
      </div>
    </nav>
  );
}
