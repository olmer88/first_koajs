const _ = require('lodash');
const postsManager = require('../managers/postsManager');

async function indexAction(ctx) {
  const posts = await postsManager.getAllPosts();
  const viewVariables = {
    posts,
    title: 'list posts',
    _,
  };
  await ctx.render('index', viewVariables);
}

async function addEditPostAction(ctx) {
  const { id } = ctx.request.query;
  const post = await postsManager.getPostById(id);
  await ctx.render('addEditPost', { title: 'new post', post, _ });
}

async function savePostAction(ctx) {
  const { id, title, content } = ctx.request.body;
  postsManager.save({ id, title, content });
  ctx.redirect(id ? `/post/${id}` : '/');
}

async function viewPostAction(ctx) {
  const { id } = ctx.params;
  const post = await postsManager.getPostById(id);
  await ctx.render('viewPost', { post, title: post.title });
}

module.exports = {
  indexAction,
  addEditPostAction,
  savePostAction,
  viewPostAction,
};
