"use client";

import { Button } from "@heroui/react";

export default function PostCard({ post }: any) {
  const truncatedContent =
    post.content.length > 150
      ? post.content.slice(0, 150) + "..."
      : post.content;

  return (
    <div
      className="
        group p-6 rounded-2xl bg-white shadow-lg 
        hover:shadow-xl transition-all duration-300 
        border border-gray-100 cursor-pointer hover:-translate-y-1
      "
    >
      <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
        {post.title}
      </h2>

      <p className="text-gray-600 mt-2 line-clamp-3 text-sm">
        {truncatedContent}
      </p>

      <div className="mt-4">
        <Button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-4 py-2"
          radius="sm"
          onPress={() => (window.location.href = `/posts/${post._id}`)}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
