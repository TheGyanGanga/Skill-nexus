import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Example: fetch skills
export async function fetchSkills() {
  const { data, error } = await supabase.from('skills').select('*');
  if (error) console.error(error);
  return data;
}

// Example: login
export async function login(email, password) {
  const { user, session, error } = await supabase.auth.signIn({ email, password });
  if (error) console.error(error);
  return { user, session };
}
