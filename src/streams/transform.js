import { Transform } from 'stream';

const transform = () => {
  const _transformStream = new Transform({
    transform(chunk, enc, cb) {
      return cb(
        null,
        chunk.toString().trim().split('').reverse().join('') + '\n'
      );
    },
  });

  process.stdin.pipe(_transformStream).pipe(process.stdout);
};

await transform();
