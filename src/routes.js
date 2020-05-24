const express = require('express');
const PatientsController = require('./controllers/PatientsController');
const routes = express.Router();

routes.get('/api/patients', PatientsController.index);
routes.get('/api/patients/:id', PatientsController.patient);
routes.post('/api/patients', PatientsController.create);
routes.delete('/api/patients/:id', PatientsController.delete);
routes.put('/api/patients/:id', PatientsController.update);

module.exports = routes;
