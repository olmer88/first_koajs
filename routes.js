const router = require('koa-router')();
const {
  indexAction, newPostAction, savePostAction
} = require('./controllers/indexController');

router
  .get('/', indexAction) // list all posts titles
// .get('/post/:id', show) // show one post
  .get('/post/new', newPostAction) // create new post
.post('/post/save', savePostAction) // url to submit form
;

module.exports = router.routes();
