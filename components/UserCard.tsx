export default function UserCard({ user }: any) {
  return (
    <div className="p-5 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
