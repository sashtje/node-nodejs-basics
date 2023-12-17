import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

import { getDirName } from '../shared/helpers.js';

const compress = async () => {
    const __dirname = getDirName(import.meta.url);
    const fileToCompressPath = join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = join(__dirname, 'files', 'archive.gz');

    const input = createReadStream(fileToCompressPath);
    const gzip = createGzip();
    const output = createWriteStream(archivePath);

    input.pipe(gzip).pipe(output);
};

await compress();
