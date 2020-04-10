const express = require('express');
const yachtController = require('../controllers/yacht-controller');
const authController = require('../controllers/auth-controller');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, yachtController.getAllYachts)
  .post(yachtController.createYacht);

router
  .route('/:id')
  .get(yachtController.getYacht)
  .patch(yachtController.updateYacht)
  .delete(yachtController.deleteYacht);

module.exports = router;
