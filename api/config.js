export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Return the Supabase credentials from environment variables
  const supabaseUrl = process.env.URL_supabase;
  const supabaseAnonKey = process.env.Database_key_supabase;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  // Set CORS headers to allow requests from your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  return res.status(200).json({
    url: supabaseUrl,
    key: supabaseAnonKey
  });
}
