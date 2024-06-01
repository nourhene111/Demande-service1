const express = require('express'); 

const demandeRouter = require('./demande.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 
  router.use('/demande', demandeRouter);
}

module.exports = routerApi;