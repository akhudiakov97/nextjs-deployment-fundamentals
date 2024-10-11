"use server";

import { supabase } from "@/lib/supabase";

export async function saveUser(user: { id: string; email: string }) {
  const { error } = await supabase
    .from('profiles')
    .upsert({
      id: user.id,
      email: user.email,
    });

  if (error) {
    throw new Error('Failed to save user: ' + error.message);
  }
}