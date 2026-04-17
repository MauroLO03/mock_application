const express = require('express')
const router = express.Router()
const mockController = require('../controllers/mockController')

router.get('/read', mockController.read)

module.exports= router