const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening to %s', port);

// const http = require('http')
// let server = http.createServer(function (req, res) {
//   console.log(req.url)
//   res.statusCode = 201
//   res.write('Hello');
//   res.end()
// })
// var port = process.env.PORT
// server.listen(port||8888, function(){
//    console.log(`Server is listening on port 8888`)
// })