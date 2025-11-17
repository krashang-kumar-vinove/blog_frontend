"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "../../../lib/api";
import { Input, Textarea, Button } from "@heroui/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function CreatePostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>('dsdsdsadsadsadasddssa');


  const createPost = async () => {
    if (!title || !content) {
      MySwal.fire({
        icon: "warning",
        title: "Title and content are required",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    setLoading(true);
    try {
      await apiPost("/posts", { title, content });
      MySwal.fire({
        icon: "success",
        title: "Post created successfully!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
      setTitle("");
      setContent("");
    } catch (err: any) {
      MySwal.fire({
        icon: "error",
        title: "Error: " + err.message,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!token) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-blue-50 to-yellow-50 px-4">
      <div className="w-full max-w-xl bg-white p-10 rounded-3xl shadow-2xl space-y-6 animate-fadeIn border-2 border-blue-200">
        <h2 className="text-3xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 mb-6">
          Create New Post
        </h2>

        <Textarea
          label="Title"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="peer bg-purple-50 border-purple-200 focus:border-purple-400"
          rows={1}
        />

        <Textarea
          label="Content"
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          placeholder="Enter post content"
          rows={20}
          className="peer bg-blue-50 border-blue-200 focus:border-blue-400"
        />

        <Button
          onPress={createPost}
          isLoading={loading}
          className="w-full py-3 text-lg font-bold rounded-xl shadow-lg text-white bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 hover:scale-105 transition-transform"
        >
          {loading ? "Creating..." : "Create Post"}
        </Button>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
