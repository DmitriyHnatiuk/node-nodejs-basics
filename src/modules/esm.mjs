import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';
import { release, version } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDirname } from '../utils/getDirname.js';
import './files/c.js';

const require = createRequire(import.meta.url);

const random = Math.random();

const unknownObject =
  random > 0.5 ? require('./files/a.json') : require('./files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${getDirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
