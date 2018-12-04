const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routes = require('./routes');

const logger = morgan('tiny');

function renderHome(req, res, next) {
  res.render(path.join(__dirname, 'pages/home'));
}

function renderKitten(req, res, next) {
  res.render(path.join(__dirname, 'pages/kitten'));
}

function renderProfile(req, res, next) {
  res.render(path.join(__dirname, 'pages/profile'));
}

module.exports = function(messageBroker) {
  const app = express()
    .use(logger)
    .use(express.json())
    .set('view engine', 'ejs')
    .get('/', renderHome)
    .get('/kitten', renderKitten)
    .get('/profile', renderProfile);

  routes.forEach(createRoute => createRoute(app, messageBroker));

  return app;
}
