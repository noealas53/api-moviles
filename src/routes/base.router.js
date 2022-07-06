const { Router } = require('express');
const useRouter = require('./user.router');

const baseRouter = Router();

baseRouter.use('/user', useRouter);

module.exports = baseRouter;