import { readFile } from 'fs/promises';
import path from 'path';
import { checkExist } from '../utils/checkExist.js';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const read = async () => {
  try {
    const filePath = path.join(
      getDirname(import.meta.url),
      'files',
      'fileToRead.txt'
    );
    const isExist = await checkExist(filePath);

    if (!isExist) {
      throw new FSError();
    }
    const content = await readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
    console.error(error);
  }
};

await read();
