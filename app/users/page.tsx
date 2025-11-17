"use client";
import { useEffect, useState } from 'react';
import { apiGet } from '../../lib/api';
import UserCard from '../../components/UserCard';

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    apiGet('/users').then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {users.map((u) => <UserCard key={u.id || u._id} user={u} />)}
    </div>
  );
}
