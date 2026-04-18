import express from 'express';
import cors from 'cors';
import { SurahRoutes } from './routes/surah.routes';
import { SearchRoutes } from './routes/search.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Quran API server is running',
  });
});

app.use('/api/surahs', SurahRoutes);
app.use('/api/search', SearchRoutes);

export default app;
