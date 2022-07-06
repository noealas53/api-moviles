const { createUser, getAllUser, getById } = require('../controllers/employer.controller');
const { Router } = require('express');

const employerRouter = Router();

employerRouter.post('/create', createUser);
employerRouter.get('/:id', getById);
employerRouter.get('/', getAllUser);

module.exports = employerRouter;