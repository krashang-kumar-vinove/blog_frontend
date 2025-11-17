"use client";
import { useState } from 'react';
import { apiPost } from '../../../lib/api';
import { Input, Button } from '@heroui/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      const res = await apiPost('/users/login', { email, password });
      console.log(res);
      alert('Login success');
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 shadow rounded-xl space-y-4">
      <Input label="Email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
      <Button color="primary" onPress={submit}>Login</Button>
    </div>
  );
}
