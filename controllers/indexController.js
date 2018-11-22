const generateId = require('uniq-id');
let posts = {};

async function indexAction(ctx) {
  ctx.body = posts;
}

async function newPostAction(ctx) {
  await ctx.render('newPost', { a: 1 });
}

async function savePostAction(ctx) {
  const { title, content } = ctx.request.body;
  posts = {
    ...posts,
    [generateId()]: { title, content },
  };
  ctx.redirect('/');
}

module.exports = {
  indexAction,
  newPostAction,
  savePostAction,
};
