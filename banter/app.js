const http =    require('http')
const uuid =    require('uuid/v4')
const fn =      require('./package.json')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {     
  const start = Date.now()
  let obj = {}
  obj.id = uuid()
  obj.fn = ''
  obj.time = `Strategic Machine Response time: ${Date.now() - start}ms`
  obj.message = `Hello from Banter`
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(obj));
  res.end();
}).listen(PORT)