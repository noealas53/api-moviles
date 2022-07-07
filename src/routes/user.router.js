const { createUser, getAllUser, getById } = require('../controllers/user.controller');
const { Router } = require('express');
const passport = require('passport');

const userRouter = Router();

userRouter.post('/create', createUser);
userRouter.get('/:id', getById);
userRouter.get('/', getAllUser);

module.exports = userRouter;
