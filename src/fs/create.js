import { writeFile } from 'fs/promises';
import path from 'path';
import { checkExist } from '../utils/checkExist.js';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const create = async () => {
  try {
    const filePath = path.join(
      getDirname(import.meta.url),
      'files',
      'fresh.txt'
    );
    const isExist = await checkExist(filePath);

    if (isExist) {
      throw new FSError('FS operation failed');
    }

    await writeFile(filePath, 'I am fresh and young');
  } catch (error) {
    console.error(error);
  }
};

await create();
