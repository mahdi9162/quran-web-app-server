import express from 'express';
import cors from 'cors';
import { SurahRoutes } from './routes/surah.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/surahs', SurahRoutes);

export default app;
