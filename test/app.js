const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  res.json({"msg":"Hello World from Strategic Machines"})
}).listen(PORT)