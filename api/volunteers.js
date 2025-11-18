import { Client } from 'pg';

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  let body;
  try {
    body = req.body;
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid JSON body' });
    return;
  }

  const { nome, cognome, telefono, newsletter, terms } = body;

  if (!nome || !cognome || !telefono || newsletter === undefined || terms === undefined) {
    res.status(400).json({ success: false, error: 'Missing required fields' });
    return;
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await client.connect();

    const query = `
      INSERT INTO profiles (nome, cognome, telefono, newsletter, terms, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING *;
    `;
    const values = [nome, cognome, telefono, newsletter, terms];

    const result = await client.query(query, values);

    await client.end();

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    if (client) {
      await client.end();
    }
    res.status(500).json({ success: false, error: error.message });
  }
}
