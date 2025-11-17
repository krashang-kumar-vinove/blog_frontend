import { apiGet } from '../../../lib/api';

export default async function PostDetail({ params }: { params: { id: string } }) {
  const post = await apiGet(`/posts/${params.id}`);

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
}
