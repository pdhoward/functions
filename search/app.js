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
  obj.message = `I find things. What would like to search for?`
  cloned = {...obj}
  response.push(cloned)

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(response));
  res.end();
}).listen(PORT)

/*
// encode an object into a query string

const params = {lat: 45, lng: 6, alt: 1000};
const queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')
// queryString is "lat=45&lng=6&alt=1000"
*/