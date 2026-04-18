import { Router } from 'express';
import { readJsonFile } from '../utils/readJsonFile';
import surahs from '../../data/surahs.json';

const router = Router();

router.get('/', (req, res) => {
  const q = String(req.query.q || '')
    .trim()
    .toLowerCase();

  if (!q) {
    return res.status(400).json({
      success: false,
      message: 'Query parameter q is required',
    });
  }

  const results: any[] = [];

  for (const surah of surahs) {
    const englishChapter = readJsonFile<any>(`data/chapters/en/${surah.id}.json`);
    const arabicChapter = readJsonFile<any>(`data/chapters/ar/${surah.id}.json`);

    const verses = englishChapter.verses || [];
    const arabicVerses = arabicChapter.verses || [];

    verses.forEach((verse: any, index: number) => {
      const translation = String(verse.translation || '').toLowerCase();

      if (translation.includes(q)) {
        const arabicVerse = arabicVerses[index];

        results.push({
          id: verse.id,
          surahId: surah.id,
          surahName: surah.transliteration,
          surahArabicName: surah.name,
          ayahNumber: verse.id,
          translation: verse.translation,
          arabicText: arabicVerse?.text || '',
        });
      }
    });
  }

  return res.json({
    success: true,
    total: results.length,
    data: results,
  });
});

export const SearchRoutes = router;
