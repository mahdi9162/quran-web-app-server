import fs from 'fs';
import path from 'path';

export const readJsonFile = <T>(filePath: string): T => {
  const fullPath = path.join(__dirname, '../../', filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(fileContent) as T;
};
