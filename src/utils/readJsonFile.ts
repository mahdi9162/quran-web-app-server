import fs from 'fs';
import path from 'path';

export const readJsonFile = <T>(filePath: string): T => {
  const fullPath = path.join(__dirname, '../../', filePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found at: ${fullPath}`);
  }

  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(fileContent) as T;
};
