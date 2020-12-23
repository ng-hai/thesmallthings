export default async function Message(req, res) {
  const { name, message, email } = req.body

  if (!name || !message || !email) {
    res.status(400).json({
      ok: false,
      status: 400,
      message: "Missing required fields",
    })

    return
  }

  // https://core.telegram.org/bots/api#markdownv2-style
  const escapedEmail = email.replace(/_/g, "\\_")

  fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      parse_mode: "Markdown",
      text: `“${message}”\n— ${name} <${escapedEmail}>`,
    }),
  })
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(err.status).json(err))
}
