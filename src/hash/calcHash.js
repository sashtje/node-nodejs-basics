import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';

import { getDirName } from '../shared/helpers.js';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const __dirname = getDirName(import.meta.url);
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const input = createReadStream(filePath);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
