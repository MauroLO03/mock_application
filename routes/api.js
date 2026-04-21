const express = require('express')
const router = express.Router()
const mockController = require('../controllers/mockController')

router.get('/dbRead', mockController.dbRead)
router.get('/dbRead1', mockController.dbRead1)
router.get('/dbRead2', mockController.dbRead2)

router.get('/dbWrite', mockController.dbWrite)
router.get('/dbWrite1', mockController.dbWrite1)
router.get('/dbWrite2', mockController.dbWrite2)


module.exports= router