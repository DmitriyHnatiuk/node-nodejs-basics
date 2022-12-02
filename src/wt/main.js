import os from 'os';
import { Worker } from 'worker_threads';
import { getDirname } from '../utils/getDirname.js';

const performCalculations = () => {
  const _cpu = os.cpus();

  let _result = Array.from(
    _cpu,
    (_, index) =>
      new Promise((resolve, reject) => {
        const worker = new Worker(`${getDirname(import.meta.url)}/worker.js`, {
          workerData: 10 + index,
        });
        worker
          .on('message', (data) => resolve({ status: 'resolved', data }))
          .on('error', () => reject({ status: 'error', data: null }));
      })
  );

  Promise.allSettled(_result)
    .then((data) => data.map((promise) => promise.value || promise.reason))
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

await performCalculations();
