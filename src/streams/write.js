import { createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { stdin } from 'node:process';

import { getDirName } from '../shared/helpers.js';

const write = async () => {
  const __dirname = getDirName(import.meta.url);
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');
  const output = createWriteStream(filePath);

  stdin.pipe(output);
};

await write();
