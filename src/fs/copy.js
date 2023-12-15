import { join } from 'path';
import { mkdir, readdir, copyFile } from 'fs/promises';

import { getDirName } from '../shared/helpers.js';

const copy = async () => {
  const __dirname = getDirName(import.meta.url);
  const filesDirPath = join(__dirname, 'files');
  const filesCopyDirPath = join(__dirname, 'files_copy');

  try {
    await mkdir(filesCopyDirPath);
    const data = await readdir(filesDirPath);

    for (let file of data) {
      await copyFile(join(filesDirPath, file), join(filesCopyDirPath, file));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
