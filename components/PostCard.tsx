export default function PostCard({ post }: any) {
  return (
    <div className="p-5 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600 line-clamp-2">{post.content}</p>
    </div>
  );
}
