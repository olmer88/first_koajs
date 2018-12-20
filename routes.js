const router = require('koa-router')();
const {
  indexAction, addEditPostAction, savePostAction, viewPostAction,
} = require('./controllers/indexController');

router
  .get('/', indexAction) // list all posts titles
  .get('/post/add-edit', addEditPostAction) // create new post
  .post('/post/save', savePostAction) // url to submit form
  .get('/post/:id', viewPostAction) // show one post
  .all('**', async (ctx) => {
    ctx.body = 'Sorry can\'t find route';
  })
;

module.exports = router.routes();
