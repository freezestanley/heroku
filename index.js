const http = require('http')
let server = http.createServer(function (req, res) {
  console.log(req.url)
  res.statusCode = 201
  res.write('Hello');
  res.end()
})
var port = process.env.PORT
server.listen(port||8888, function(){
   console.log(`Server is listening on port 8888`)
})