const Koa = require('koa');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');
const path = require('path');

const app = new Koa();
app.use(bodyParser());
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
});

app.use(routes);

app.listen(3000);
