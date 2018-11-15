const Koa = require('koa');
const render = require('koa-ejs');
const routes = require('./routes');
const path = require('path');

const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
});

app.use(routes);

app.listen(3000);
