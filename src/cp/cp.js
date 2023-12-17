import { fork } from 'node:child_process';
import { join } from 'node:path';

import { getDirName } from '../shared/helpers.js';

const spawnChildProcess = async (args) => {
  const __dirname = getDirName(import.meta.url);
  const processFilePath = join(__dirname, 'files', 'script.js');
  const childProcess = fork(processFilePath, args);

  childProcess.on('error', (err) => {
    console.log('Failed to start child process: ', err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["hello", "world", "it's", "Christmas"]);
