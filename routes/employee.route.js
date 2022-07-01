const express = require('express')
const router = express.Router()
const controller = require('../controllers/employee.controller')

router.post('/employee/addCustomer', controller.create)
router.get('/employee/getAll',controller.getAll)
router.get('/employee/getById/:id',controller.getById)
router.put('/employee/updateById/:id',controller.updateById)
router.delete('/employee/deleteById/:id',controller.deleteById)
router.delete('/employee/deleteAll',controller.deleteAll)
router.post('/employee/getByEmail',controller.getByEmail)




module.exports = router