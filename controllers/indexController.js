async function indexAction(ctx) {
  ctx.body = 'Hello World';
}

async function newPostAction(ctx) {
  await ctx.render('newPost', { a: 1 });
}

module.exports = {
  indexAction,
  newPostAction,
};

