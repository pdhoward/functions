const http =                require('http')
const uuid =                require('uuid/v4')
const { NlpManager } =      require('node-nlp')
const fn =                  require('./package.json')
const training =            require('./training/training.json')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {     
  const start = Date.now()
  console.log("--------------------------start nlp------------------------")

  intent('hello').then((resp) => {
    let response = []
    let obj = {}
    obj.id = uuid()
    obj.fn = fn.name
    obj.timeStamp = Date.now()
    obj.message = `Strategic Machine AI time: ${Date.now() - start}ms`
    let cloned = {...obj}
    response.push(cloned)

    obj.timeStamp = Date.now()
    obj.message = resp
    cloned = {...obj}
    response.push(cloned)

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(response));
    res.end();
  })
  
}).listen(PORT)


/////////////////////////////////////////////////////
//////     train model and decipher intent   ///////
////////////////////////////////////////////////////
const intent = (msg) => {

    console.log("----------------started intent---------------")
    console.log(msg)
    console.log(training[0])

    return new Promise (async (resolve, reject) => {
        const manager = new NlpManager({ languages: ['en'] });

        training.map((m) => {    
          manager.addDocument('en', m.text, m.intent);
        })

        console.time('execute nlp');
        await manager.train();
        console.timeEnd('execute nlp');
        

        const response = await manager.process('en', msg);
        //console.log(`NLP analysis for >>> ${msg}`)
        //console.log(response);
       resolve(response)
    })
    
}
