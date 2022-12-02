import { rm } from 'fs/promises';
import path from 'path';
import { checkExist } from '../utils/checkExist.js';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const remove = async () => {
  try {
    const filePath = path.join(
      getDirname(import.meta.url),
      'files',
      'fileToRemove.txt'
    );

    const isExist = await checkExist(filePath);

    if (!isExist) {
      throw new FSError('FS operation failed');
    }

    await rm(filePath);
  } catch (error) {
    console.error(error);
  }
};

await remove();
