const express = require('express');
const validate = require('../util/validate');
const validator = require('../validator/coin');
const coinController = require('../controller')

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      result: 'WELCOME TO Bot API NODE FRAMEWORK by miriam',
      data: 'FRAMEWORK',
    });
  });

  router.post(
    '/listCoin',
    validate(validator.coinListing),
    coinController.createCoin
  );

  router.get(
    '/getAllListedCoins',
    coinController.listAllCoins
  );

  router.get(
    '/getACoin/:id',
    validate(validator.viewACoin),
    coinController.viewACoin
  );


  router.put(
    '/updateCoin/:id',
    validate(validator.updateCoin),
    coinController.updateCoin
  );

  router.delete(
    '/deleteCoin/:id',
    coinController.deleteCoin
  );

module.exports = router;