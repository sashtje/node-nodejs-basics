import { join } from 'path';
import { readFile } from 'fs/promises';

import {getDirName} from "../shared/helpers.js";

const read = async () => {
  const __dirname = getDirName(import.meta.url);
  const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const content = await readFile(fileToReadPath, { encoding: 'utf8' });

    console.log(content);
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await read();
