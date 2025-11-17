"use client";

import { useState } from "react";
import PostCard from "./PostCard";

export default function PostListClient({
  initialPosts,
}: {
  initialPosts: any[];
}) {
  const [posts] = useState(initialPosts || []);

  if (!posts.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-gray-400 text-lg">No posts available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
      {posts.map((p) => (
        <PostCard key={p.id ?? p._id} post={p} />
      ))}
    </div>
  );
}
