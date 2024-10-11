'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveUser } from '@/app/auth/actions';
import { supabase } from '@/lib/supabase';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);

      if (data.user) {
        try {
          await saveUser({ id: data.user.id, email: data.user.email || '' });
        } catch (saveError) {
          console.error('Failed to save user profile:', saveError);
        }
      }

      router.push('/profile');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSignUp} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <a href="/auth/signin" className="text-blue-500">
          Sign In
        </a>
      </p>
    </div>
  );
}
