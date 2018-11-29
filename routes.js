const router = require('koa-router')();
const {
  indexAction, newPostAction, savePostAction, viewPostAction,
} = require('./controllers/indexController');

router
  .get('/', indexAction) // list all posts titles
  .get('/post/:id', viewPostAction) // show one post
  .get('/post/new', newPostAction) // create new post
  .post('/post/save', savePostAction) // url to submit form
  .all('**', async (ctx) => {
    ctx.body = 'Sorry can\'t find route';
  })
;

module.exports = router.routes();
