'use strict';

const express = require('express');

/*  =============================================================================
    Models & Services
    ============================================================================= */
const postModel = require('../models/postModel.js')
const categoryModel = require('../models/categoryModel.js')

const authService = require('../services/authService.js')

/*  =============================================================================
  Rroutes
    ============================================================================= */

module.exports = function(app){
  app.post('/api/auth/login', authService.authenticate);
  app.get('/api/auth/isloggedin', authService.isLoggedIn);
  app.get('/api/auth/logout', authService.logout);

  app.get('/api/posts', postModel.getAll);
  app.post('/api/posts', postModel.add);

  app.get('/api/categories', categoryModel.getAll);
  app.post('/api/categories', categoryModel.add);
};
