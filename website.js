const Koa = require('koa');
const serve = require('koa-static');
const logger = require('koa-logger');
const Router = require('@koa/router');

const website = new Koa();
const home = new Router({
  prefix: '/'
});
const contactAPI = new Router({
  prefix: 'api/contact'
});
website.use(logger());

website.use(serve(`${__dirname}/build`));

website.listen(3000);
