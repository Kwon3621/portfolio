/**
 * Vercel 서버리스 함수 — Upstage Chat Completions 프록시
 * 요청 body의 messages 배열을 Upstage API에 전달하고 응답 JSON을 그대로 반환한다.
 * API 키는 process.env.UPSTAGE_API_KEY 환경 변수만 사용한다.
 */

const UPSTAGE_API_URL = 'https://api.upstage.ai/v1/chat/completions';
const UPSTAGE_MODEL = 'solar-pro3';

export default async function handler(req, res) {
  /* POST만 허용 */
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  const apiKey = process.env.UPSTAGE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: 'Server API key not configured' } });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: { message: 'messages array is required' } });
  }

  try {
    const response = await fetch(UPSTAGE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: UPSTAGE_MODEL,
        messages: messages
      })
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: { message: 'Failed to reach Upstage API' } });
  }
}
