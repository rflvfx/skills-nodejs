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
