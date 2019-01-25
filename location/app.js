const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {     
  const start = Date.now()
  let obj = {}
  obj.time = `Strategic Machine Response time: ${Date.now() - start}ms`
  obj.message = `I am your location services agent`
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(obj));
  res.end();
}).listen(PORT)