import fs from 'fs';
import path from 'path';

export const readJsonFile = <T>(filePath: string): T => {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(fileContent) as T;
};
