import express from 'express';
import cors from 'cors';
import { SurahRoutes } from './routes/surah.routes';
import { SearchRoutes } from './routes/search.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/surahs', SurahRoutes);
app.use('/api/search', SearchRoutes);

export default app;
