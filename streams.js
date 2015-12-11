const { Transform } = require("stream");

const upper = new Transform({
  transform(chunk, enc, cb) { cb(null, chunk.toString().toUpperCase()); },
});

process.stdin.pipe(upper).pipe(process.stdout);
- Minor cleanup — iteration 13 (2015)
- Add helper — iteration 23 (2015)
- Polish code — iteration 32 (2015)
- Fix lint warnings — iteration 35 (2015)
- Add tests — iteration 38 (2015)
- Add helper — iteration 41 (2015)
