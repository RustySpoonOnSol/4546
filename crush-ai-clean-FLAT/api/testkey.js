export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: "Hey sexy 😘" }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: "OpenAI API key test failed", details: data });
    }

    return res.status(200).json({ message: data.choices?.[0]?.message?.content });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}