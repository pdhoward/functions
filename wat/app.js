const http =                require('http')
const uuid =                require('uuid/v4')
const fn =                  require('./package.json')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {     
  const start = Date.now()
  let conversation = '';

  req.on('data', (data) => {
    conversation += data
  });

  req.on('end', async () => {
    //////////////////////////////
    let response = []
    let obj = {}
    obj.id = uuid()
    obj.fn = fn.name
    obj.timeStamp = Date.now()
    obj.message = `THis worked well at ${start}`
    response.push(obj)
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(response));
    res.end();



    //////////////////////////////

    /*
    try {   
      
      const reply = await main(JSON.parse(conversation));
      let response = []
      let obj = {}
      obj.id = uuid()
      obj.fn = fn.name
      obj.timeStamp = Date.now()

     let response =  reply.map((r) => {
          obj.message = r 
          return obj
      })
         
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(response));
      res.end();
    } catch (error) {
      console.log(error);
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(error));
    }
    */
    res.end();
  });
  
}).listen(PORT);

async function main(conversation) {
  return new Promise (function(resolve, reject) {
    try {      
  
      getMessage(conversation, (response) => {        
        resolve(response)
      })
    } catch (error) {
      reject(error)
    }
  });
}

const getMessage = (conversation, cb) => {
  const response = []; 

  response.push(`Your message read ' ${conversation.Body} '`)
  response.push(`Please try again. I am only ${conversation.confidence} that I understood your message`)

  cb(response);
};

  
 

