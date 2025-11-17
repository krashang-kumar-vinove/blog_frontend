"use client";

import { useState } from "react";
import PostCard from "./PostCard";

interface PostListClientProps {
  initialPosts: any[];
  postsPerPage?: number;
}

export default function PostListClient({
  initialPosts,
  postsPerPage = 6,
}: PostListClientProps) {
  const [posts] = useState(initialPosts || []);
  const [currentPage, setCurrentPage] = useState(1);

  if (!posts.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-gray-400 text-lg">No posts available</p>
      </div>
    );
  }

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
        {currentPosts.map((p) => (
          <PostCard key={p.id ?? p._id} post={p} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 disabled:opacity-50 transition"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === i + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 hover:bg-gray-200"
            } transition`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 disabled:opacity-50 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
