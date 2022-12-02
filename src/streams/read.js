import { createReadStream } from 'fs';
import path from 'path';
import { getDirname } from '../utils/getDirname.js';

const read = () => {
  const _readStream = createReadStream(
    path.join(getDirname(import.meta.url), 'files', 'fileToRead.txt'),
    'utf-8'
  );

  _readStream
    .on('error', (error) => {
      _readStream.destroy();
      console.error(error);
    })
    .pipe(process.stdout);
};

await read();
