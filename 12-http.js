const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Sup foo welcome to home page')
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
  }
  res.end(`
  <h1>Whoopie u got a dookie!!</h1>
  <p>NO page ma boy</p>
  <a href="/">Back home?!</a>
  `)
})

server.listen(5000)