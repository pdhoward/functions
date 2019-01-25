const http =    require('http')
const uuid =    require('uuid/v4')
const fn =      require('./package.json')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {     
  const start = Date.now()
 
  let response = []
  let obj = {}
  obj.id = uuid()
  obj.fn = fn.name
  obj.timeStamp = Date.now()
  obj.message = `Strategic Machine Response time: ${Date.now() - start}ms`
  let cloned = {...obj}
  response.push(cloned)

  obj.timeStamp = Date.now()
  obj.message = `Hello - I can help you buy that`
  cloned = {...obj}
  response.push(cloned)

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(response));
  res.end();
}).listen(PORT)