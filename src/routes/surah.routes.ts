import { Router } from 'express';
import surahs from '../../data/surahs.json';

const router = Router();

// All surah
router.get('/', (_req, res) => {
  res.json({
    success: true,
    total: surahs.length,
    data: surahs,
  });
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
