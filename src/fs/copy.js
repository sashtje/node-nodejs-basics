import { join } from 'path';
import { mkdir, readdir, copyFile } from 'fs/promises';

import { getDirName, isFile } from '../shared/helpers.js';

const copyDir = async (dirFromPath, dirToPath) => {
  await mkdir(dirToPath);

  const data = await readdir(dirFromPath);

  for (let fileOrDir of data) {
    const pathFrom = join(dirFromPath, fileOrDir);
    const pathTo = join(dirToPath, fileOrDir);

    if (await isFile(pathFrom)) {
      await copyFile(pathFrom, pathTo);
    } else {
      await copyDir(pathFrom, pathTo);
    }
  }
};

const copy = async () => {
  const __dirname = getDirName(import.meta.url);
  const filesDirPath = join(__dirname, 'files');
  const filesCopyDirPath = join(__dirname, 'files_copy');

  try {
    await copyDir(filesDirPath, filesCopyDirPath);
  } catch(err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await copy();
