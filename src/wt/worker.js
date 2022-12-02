import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const _result = nthFibonacci(workerData);

  parentPort.postMessage(_result);
};

sendResult();
