export default function handler(req, res) {
  const { name, email, message } = req.body || {};

  res.status(200).json({
    success: true,
    received: {
      name,
      email,
      message
    }
  });
}
