import { join } from 'path';
import { readdir } from 'fs/promises';

import {getDirName} from "../shared/helpers.js";

const list = async () => {
  const __dirname = getDirName(import.meta.url);
  const filesDirPath = join(__dirname, 'files');

  try {
    const files = await readdir(filesDirPath, { withFileTypes: true });
    console.log(files.filter(file => file.isFile()).map(file => file.name));
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await list();
