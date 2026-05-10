export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL necessária' });
  try {
    const response = await fetch(url);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.status(200).send(text);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
