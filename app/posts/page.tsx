import { apiGet } from '../../lib/api';
import PostCard from '../../components/PostCard';

export default async function PostsPage() {
  const posts = await apiGet('/posts');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((p: any) => <PostCard key={p.id || p._id} post={p} />)}
    </div>
  );
}
