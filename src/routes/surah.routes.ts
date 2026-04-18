import { Router } from 'express';
import surahs from '../../data/surahs.json';
import { readJsonFile } from '../utils/readJsonFile';

const router = Router();

// All surah
router.get('/', (_req, res) => {
  res.json({
    success: true,
    total: surahs.length,
    data: surahs,
  });
});

// specific verses
router.get('/:id/verses', (req, res) => {
  const id = Number(req.params.id);

  try {
    const arabicVerses = readJsonFile<any>(`data/chapters/ar/${id}.json`);
    const englishVerses = readJsonFile<any>(`data/chapters/en/${id}.json`);

    return res.json({
      success: true,
      data: {
        arabic: arabicVerses,
        english: englishVerses,
      },
    });
  } catch (error) {
    console.error('VERSES ROUTE ERROR:', error);

    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// specific surah
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const surah = surahs.find((item) => item.id === id);

  if (!surah) {
    return res.status(404).json({
      success: false,
      message: 'Surah not found',
    });
  }

  return res.json({
    success: true,
    data: surah,
  });
});

export const SurahRoutes = router;
