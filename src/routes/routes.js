const express = require('express')
const router = express.Router()
const Controller = require('../controller/cryptoController')

// crypto to crypto convertor API
router.get("/crypto-pair-price", Controller.cryptoCalculator)


module.exports = router