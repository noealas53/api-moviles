const { Router } = require('express');
const useRouter = require('./user.router');

const baseRouter = Router();

baseRouter.use('/user', useRouter);
baseRouter.use('/employer', useRouter);

module.exports = baseRouter;