import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6 text-lg font-medium">
      <Link href="/posts">Posts</Link>
      <Link href="/posts/create">Create Post</Link>
      <Link href="/users">Users</Link>
      <Link href="/users/login">Login</Link>
    </nav>
  );
}
