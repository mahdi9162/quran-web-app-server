import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Quran API server is running',
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'OK',
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
