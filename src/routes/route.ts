import express from 'express';
import {createEmployees,getEmployees,deleteEmployees,updateEmployees} from '../controllers/employeesController'
const router = express.Router();

router.post('/employees',createEmployees);
router.get('/employees',getEmployees);
router.delete('/employees',deleteEmployees);
router.put('/employees',updateEmployees);

module.exports = router