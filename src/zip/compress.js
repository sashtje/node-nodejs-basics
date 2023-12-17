import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

import { getDirName } from '../shared/helpers.js';

const compress = async () => {
    const __dirname = getDirName(import.meta.url);
    const fileToCompressPath = join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = join(__dirname, 'files', 'archive.gz');

    const input = createReadStream(fileToCompressPath);
    const gzip = createGzip();
    const output = createWriteStream(archivePath);

    pipeline(input, gzip, output, (err) => {
       if (err) {
           console.error('An error occurred: ', err);
       }
    });
};

await compress();
