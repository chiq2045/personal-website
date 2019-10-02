const Koa = require('koa');
const serve = require('koa-static');

const website = new Koa();

website.use(serve(`${__dirname}/build`));

website.listen(3000);
