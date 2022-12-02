import { rename as _rename } from 'fs/promises';
import path from 'path';
import { checkExist } from '../utils/checkExist.js';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const rename = async () => {
  try {
    const oldFilePath = path.join(
      getDirname(import.meta.url),
      'files',
      'wrongFilename.txt'
    );

    const newFilePath = path.join(
      getDirname(import.meta.url),
      'files',
      'properFilename.md'
    );

    const oldIsExist = await checkExist(oldFilePath);
    const newIsExist = await checkExist(newFilePath);

    if (!oldIsExist || newIsExist) {
      throw new FSError();
    }

    _rename(oldFilePath, newFilePath);
  } catch (error) {
    console.error(error);
  }
};

await rename();
