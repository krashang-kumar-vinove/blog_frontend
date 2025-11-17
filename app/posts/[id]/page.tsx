"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGet } from "../../../lib/api";

interface Post {
  id?: string;
  title: string;
  content: string;
}

export default function PostDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!params?.id) return;
      try {
        const data = await apiGet(`/posts/${params.id}`);
        setPost(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [params?.id]);

  if (loading)
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-500">
        Loading...
      </div>
    );

  if (!post)
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-red-500">
        Post not found
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-10 rounded-3xl shadow-xl text-white mb-8">
        <h1 className="text-5xl font-extrabold leading-tight">{post.title}</h1>
      </div>

      {/* Content */}
      <div className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </div>
  );
}
