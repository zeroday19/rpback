const express = require('express')
const router = express.Router()
const InvoiceController = require('../Controllers/Invoice.Controller')

router.post('/addgstn', InvoiceController.gstnregister)

router.post('/addinvoice', InvoiceController.addinvoice)

router.get('/getinvoice', InvoiceController.getinvoice)

router.delete('/deleteinvoice', InvoiceController.deleteinvoice)

module.exports = router
