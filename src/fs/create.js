import { join } from 'path';
import { writeFile } from 'fs/promises';

import { getDirName, isDirOrFileExists } from '../shared/helpers.js';

const create = async () => {
    const content = 'I am fresh and young';
    const __dirname = getDirName(import.meta.url);
    const filePath = join(__dirname, 'files', 'fresh.txt');

    if (await isDirOrFileExists(filePath)) {
      throw new Error('FS operation failed');
    }

    try {
      await writeFile(filePath, content, {flag: 'w+'});

      console.log('The file was created successfully');
    } catch {
      throw new Error('FS operation failed');
    }
};

await create();
