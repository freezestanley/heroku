const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
console.log('http://localhost:3000')
app.listen(3000);