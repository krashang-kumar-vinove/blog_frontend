"use client";
import { useState } from 'react';
import { apiPost } from '../../../lib/api';
import { Input, Textarea, Button } from '@heroui/react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = async () => {
    try {
      await apiPost('/posts', { title, content });
      alert('Post created');
      setTitle(''); setContent('');
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded-xl space-y-4">
      <Input label="Title" value={title} onChange={(e: any) => setTitle(e.target.value)} />
      <Textarea label="Content" value={content} onChange={(e: any) => setContent(e.target.value)} />
      <Button color="primary" onPress={submit}>Create Post</Button>
    </div>
  );
}
