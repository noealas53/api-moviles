const { Router } = require('express');
const authRouter = require('./auth.router');
const useRouter = require('./user.router');
const employerRouter = require('./employer.router');

const baseRouter = Router();

baseRouter.use('/user', useRouter);
baseRouter.use('/employer', employerRouter);
baseRouter.use('/auth', authRouter)

module.exports = baseRouter;