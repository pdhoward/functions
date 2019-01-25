const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  res.end('Hello World from Strategic Machines\n')
}).listen(PORT)