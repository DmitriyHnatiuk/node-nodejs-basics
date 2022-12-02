import { createWriteStream } from 'fs';
import path from 'path';
import { getDirname } from '../utils/getDirname.js';

const write = () => {
  const filePath = path.join(
    getDirname(import.meta.url),
    'files',
    'fileToWrite.txt'
  );

  const _writeSteam = createWriteStream(filePath);

  process.stdin.pipe(_writeSteam).on('error', (error) => {
    console.error(error);
    _writeSteam.end();
  });
};

await write();
