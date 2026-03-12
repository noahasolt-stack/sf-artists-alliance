export default function handler(req, res) {
  const supabaseUrl = process.env.URL_supabase;
  const supabaseAnonKey = process.env.Database_key_supabase;

  console.log('API called - URL:', supabaseUrl ? 'exists' : 'missing');
  console.log('API called - Key:', supabaseAnonKey ? 'exists' : 'missing');

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ 
      error: 'Missing environment variables',
      url: supabaseUrl ? 'found' : 'not found',
      key: supabaseAnonKey ? 'found' : 'not found'
    });
  }

  return res.status(200).json({
    url: supabaseUrl,
    key: supabaseAnonKey
  });
}
