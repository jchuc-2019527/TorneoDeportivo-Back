'use strict'

const express = require('express');
const userController = require('../controllers/user.controller');
const mdAuth = require('../services/authenticated');

const api = express.Router();

api.post('/registerUser', userController.registerUser);
api.post('/registerUserByAdmin', [mdAuth.ensureAuth, mdAuth.isAdmin], userController.registerUserByAdmin);
api.post('/login', userController.login);
api.get('/getUsers',[mdAuth.ensureAuth, mdAuth.isAdmin], userController.getUsers);
api.put('/updateUserByAdmin/:id',[mdAuth.ensureAuth, mdAuth.isAdmin], userController.updateUserByAdmin);
api.delete('/deleteUserByAdmin/:id',[mdAuth.ensureAuth, mdAuth.isAdmin], userController.deleteUserByAdmin);
api.put('/updateUser/:id', [mdAuth.ensureAuth], userController.updateUser);

module.exports = api;
