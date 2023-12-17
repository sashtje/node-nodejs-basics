import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { stdout } from 'node:process';

import { getDirName } from '../shared/helpers.js';

const read = async () => {
  const __dirname = getDirName(import.meta.url);
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  const input = createReadStream(filePath);

  input.pipe(stdout);
};

await read();
