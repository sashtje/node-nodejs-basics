import { cpus } from 'node:os';
import { join } from 'node:path';
import { Worker } from 'node:worker_threads';

import { getDirName } from '../shared/helpers.js';

const performCalculations = async () => {
  const coresNumber = cpus().length;
  const __dirname = getDirName(import.meta.url);
  const workerFilePath = join(__dirname, 'worker.js');

  let nStart = 10;
  let exitThreads = 0;

  const handleExit = () => {
    exitThreads++;

    if (exitThreads === coresNumber) {
      console.log(workers);
    }
  };

  const workers = (new Array(coresNumber)).fill(undefined).map((_, index) => {
      const worker = new Worker(workerFilePath, { workerData: nStart++ });

      worker.on('message', (data) => {
        workers[index] = {status: 'resolved', data};
      });
      worker.on('error', () => {
        workers[index] = {status: 'error', data: null};
      });
      worker.on('exit', handleExit);

      return worker;
    });
};

await performCalculations();
