const { Transform } = require("stream");

const upper = new Transform({
  transform(chunk, enc, cb) { cb(null, chunk.toString().toUpperCase()); },
});

process.stdin.pipe(upper).pipe(process.stdout);
- Minor cleanup — iteration 13 (2015)
- Add helper — iteration 23 (2015)
