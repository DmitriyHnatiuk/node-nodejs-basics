import { readdir } from 'fs/promises';
import path from 'path';
import { checkExist } from '../utils/checkExist.js';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const list = async () => {
  try {
    const dirPath = path.join(getDirname(import.meta.url), 'files');
    const isExist = await checkExist(dirPath);

    if (!isExist) {
      throw new FSError();
    }
    const filesArr = await readdir(dirPath);
    console.log(filesArr.join('\n'));
  } catch (error) {
    console.error(error);
  }
};

await list();
