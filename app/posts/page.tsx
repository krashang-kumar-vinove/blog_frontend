import PostListClient from "../../components/PostListClient";
import { API_URL } from "../../lib/api";

export const dynamic = "force-dynamic"; // ensures fresh SSR on each request

export default async function PostsPage() {
  const apiUrl = API_URL + "/posts";

  const res = await fetch(apiUrl, {
    method: "GET",
    cache: "no-store", // SSR fetch (no cached HTML)
  });

  if (!res.ok) {
    console.error("Failed to fetch posts:", res.statusText);
    return <div className="text-red-500">Failed to load posts.</div>;
  }

  const posts = await res.json();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <PostListClient initialPosts={posts} />
    </div>
  );
}
