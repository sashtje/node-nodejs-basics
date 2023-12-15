import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile, access, constants } from 'fs/promises';

const getDirName = () => {
  const __filename = fileURLToPath(import.meta.url);
  return dirname(__filename);
}

const create = async () => {
    const content = 'I am fresh and young';
    const __dirname = getDirName();
    const filePath = join(__dirname, 'files', 'fresh.txt');

    let fileExist = true;

    try{
      await access(filePath, constants.F_OK);
    } catch {
      fileExist = false;
    }

    if (fileExist) {
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
