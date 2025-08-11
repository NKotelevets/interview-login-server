export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  // Моковые пользователи
  const users = [
    { id: 1, email: "test@example.com", password: "123456", name: "John Doe" },
    {
      id: 2,
      email: "jane@example.com",
      password: "password",
      name: "Jane Smith",
    },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.status(200).json({
    token: "mock-token-abc123",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}
