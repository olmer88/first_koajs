const router = require('koa-router')();
const {
  indexAction, newPostAction
} = require('./controllers/indexController');

router
  .get('/', indexAction)
  .get('/post/new', newPostAction)
// .get('/post/:id', show)
// .post('/post', create)
;

module.exports = router.routes();
