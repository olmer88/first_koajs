const _ = require('lodash');
const generateId = require('uniq-id');
const postsManager = require('../managers/postsManager');

let posts = {
  1: { title: 'First post', content: 'Content from first post' },
  2: { title: 'Second post', content: 'Content from second post' },
};

async function indexAction(ctx) {
  const posts = await postsManager.getAllPosts();
  const viewVariables = {
    posts,
    title: 'list posts',
    _,
  };
  await ctx.render('index', viewVariables);
}

async function newPostAction(ctx) {
  await ctx.render('newPost', { title: 'new post' });
}

async function savePostAction(ctx) {
  const { title, content } = ctx.request.body;
  posts = {
    ...posts,
    [generateId()]: { title, content },
  };
  ctx.redirect('/');
}

async function viewPostAction(ctx) {
  // const { id } = ctx.request.query;
  const { id } = ctx.params;
  const [post] = await postsManager.getPostById(id);
  await ctx.render('viewPost', { post, title: post.title });
}

module.exports = {
  indexAction,
  newPostAction,
  savePostAction,
  viewPostAction,
};
