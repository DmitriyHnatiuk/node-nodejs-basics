import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import zlib from 'zlib';
import { getDirname } from '../utils/getDirname.js';

const compress = async () => {
  const _path = path.join(getDirname(import.meta.url), 'files');
  const _readStream = createReadStream(`${_path}/fileToCompress.txt`);
  const _writeStream = createWriteStream(`${_path}/archive.gz`);
  const _compressStream = zlib.createGzip();

  const _error = (error) => {
    _readStream.destroy(), _writeStream.end(), console.error(error);
  };

  _readStream
    .on('error', _error)
    .pipe(_compressStream)
    .on('error', _error)
    .pipe(_writeStream)
    .on('error', _error);
};

await compress();
