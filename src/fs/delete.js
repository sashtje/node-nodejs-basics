import { join } from 'path';
import { rm } from 'fs/promises';

import {getDirName} from "../shared/helpers.js";

const remove = async () => {
  const __dirname = getDirName(import.meta.url);
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(fileToRemovePath);
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await remove();
