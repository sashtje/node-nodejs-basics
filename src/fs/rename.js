import { join } from 'path';
import { rename as renameFile } from 'fs/promises';

import {getDirName, isDirOrFileExists} from "../shared/helpers.js";

const rename = async () => {
  const __dirname = getDirName(import.meta.url);
  const filePath = join(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = join(__dirname, 'files', 'properFilename.md');

  if (await isDirOrFileExists(newFilePath)) {
    throw new Error('FS operation failed');
  }

  try {
    await renameFile(filePath, newFilePath);
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await rename();
