const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {     
  const start = Date.now()
  let obj = {}
  obj.time = `Strategic Machine Response time: ${Date.now() - start}ms`
  obj.message = `Hello from RETURN`
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(obj));
  res.end();
}).listen(PORT)