export default async (req, res) => {
  const { name, message, email } = req.body

  if (!name || !message || !email) {
    res.status(400).json({
      ok: false,
      status: 400,
      message: "Missing required fields",
    })

    return
  }

  fetch(`https://api.telegram.org/bot${process.env.botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.chatId,
      parse_mode: "Markdown",
      text: `“${message}”\n— ${name} <${email}>`,
    }),
  })
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err))
}
