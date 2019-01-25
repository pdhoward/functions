const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  //res.json({"msg":"Hello World from Strategic Machines"})
  res.setHeader('Content-Type', 'text/html')
  //res.send('hry thrtr')
  const start = Date.now()
  res.end(`Strategic Machine Response time: ${Date.now() - start}ms`)
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.write('Hello World!');
  //res.end();
}).listen(PORT)