import { access, cp } from 'fs/promises';
import { FSError } from '../utils/fsErrors.js';
import { getDirname } from '../utils/getDirname.js';

const dirPath = getDirname(import.meta.url);

const copiedFolder = `${dirPath}/files`;
const destFolder = `${dirPath}/files_copy`;

const copy = async () => {
  try {
    await access(copiedFolder);

    await cp(copiedFolder, destFolder, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ERR_FS_CP_EEXIST') {
      console.error(new FSError());
    } else {
      console.error(error);
    }
  }
};

copy();
