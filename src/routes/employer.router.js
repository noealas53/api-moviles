const { createEmployer, getAllEmployer, getById } = require('../controllers/employer.controller');
const { Router } = require('express');

const employerRouter = Router();

employerRouter.post('/create', createEmployer);
employerRouter.get('/:id', getById);
employerRouter.get('/', getAllEmployer);

module.exports = employerRouter;