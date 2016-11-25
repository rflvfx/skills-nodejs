// HTTP server com o modulo nativo
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  res.writeHead(404);
  res.end();
});

server.listen(3000, () => console.log("listening :3000"));
- Improve naming — iteration 2 (2015)
- Add example — iteration 5 (2015)
- Add validation — iteration 9 (2015)
- Extend coverage — iteration 12 (2015)
- Optimize performance — iteration 15 (2015)
- Update docs — iteration 16 (2015)
- Fix typo — iteration 34 (2015)
- Update config — iteration 37 (2015)
- Fix lint warnings — iteration 45 (2015)
- Add feature — iteration 53 (2015)
- Add validation — iteration 56 (2015)
- Add feature — iteration 57 (2015)
- Update docs — iteration 4 (2016)
- Extend coverage — iteration 13 (2016)
- Add tests — iteration 15 (2016)
- Update config — iteration 16 (2016)
- Update dependencies — iteration 20 (2016)
- Tweak implementation — iteration 23 (2016)
- Add validation — iteration 26 (2016)
- Fix typo — iteration 30 (2016)
- Refactor module — iteration 33 (2016)
