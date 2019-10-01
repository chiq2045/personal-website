const Koa = require('koa');

const website = new Koa();

website.use(ctx => {
  ctx.body = 'Hello World';
});

website.listen(3000);
