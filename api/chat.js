export default async function (req, res) {
  res.json({
    version: '2.0',
    template: {
      outputs: [{
        simpleText: { text: '🧪 Vercel + OpenAI 연결 테스트 성공!' }
      }]
    }
  });
}
