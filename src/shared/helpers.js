import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { access, constants, stat } from 'fs/promises';

export function getDirName(url) {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
}

export async function isDirOrFileExists(path) {
  try{
    await access(path, constants.F_OK);

    return true;
  } catch {
    return false;
  }
}

export async function isFile(path) {
  const stats = await stat(path);
  return stats.isFile();
}
