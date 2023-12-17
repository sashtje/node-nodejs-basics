import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';

import { getDirName } from '../shared/helpers.js';

const decompress = async () => {
  const __dirname = getDirName(import.meta.url);
  const archivePath = join(__dirname, 'files', 'archive.gz');
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const input = createReadStream(archivePath);
  const unzip = createUnzip();
  const output = createWriteStream(filePath);

  pipeline(input, unzip, output, err => {
    if (err) {
      console.error('An error occurred: ', err);
    }
  });
};

await decompress();
