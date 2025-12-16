export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body || {};
    // In production, connect to an email service or database as needed.
    console.log('Contact form submission (Vercel):', { name, email, phone, message });
    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });
  }
  res.setHeader('Allow', ['POST']);
  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
