const Koa = require('koa');
const serve = require('koa-static');

const website = new Koa();

website.use(serve(`${__dirname}/src`));

website.listen(3000);
