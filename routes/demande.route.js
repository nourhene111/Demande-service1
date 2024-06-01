const express = require('express');
const router = express.Router(); 
const demandeController = require('../controllers/demande.controller');
const authValidation = require('../middleware/auth');
const multer=require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });
 

router
    .post('/create',authValidation,demandeController.create)
    .get('/getListDemande', demandeController.get )
    .get('/getMyDemande',authValidation, demandeController.getMyDemande )
    .get('/:id', demandeController.getById )
    .put('/:id', demandeController.update )
    .patch('/updatePriorite/:id', demandeController.updatePriorite )
    .delete('/:id', demandeController._delete );

module.exports = router;