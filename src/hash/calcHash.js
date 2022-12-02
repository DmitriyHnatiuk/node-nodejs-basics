import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const calculateHash = async () => {
  try {
    const hash = await createHash('sha256');

    const data = await readFile(
      path.join(
        getDirname(import.meta.url),
        'files',
        'fileToCalculateHashFor.txt'
      )
    );

    await hash.update(data);
    console.log(hash.digest('hex'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      return console.error(
        new FSError('File not found on directory: ' + err.path)
      );
    }
    console.error(err);
  }
};

await calculateHash();
