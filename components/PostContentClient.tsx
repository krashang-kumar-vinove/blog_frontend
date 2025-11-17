"use client";

export default function PostContentClient({ content }: { content: string }) {
  return (
    <div className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}
