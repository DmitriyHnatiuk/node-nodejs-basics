import { fork } from 'child_process';
import { getDirname } from '../utils/getDirname.js';

const spawnChildProcess = async (args) =>
  fork(`${getDirname(import.meta.url)}/files/script.js`, args);

const [, , ...rest] = process.argv;

spawnChildProcess(rest);
