import express from 'express';
import { createEmployee, getEmployees, getEmployeeById, deleteEmployee } from '../dataAccess/EmployeeDA.js';

let employeeRouter = express.Router();

employeeRouter.route('/employee').post( async (req, res) => {
    return res.json(await createEmployee(req.body));
});

employeeRouter.route('/employee').get( async (req, res) => {
    return res.json(await getEmployees());
});

employeeRouter.route('/employee/:id').get( async (req, res) => {
    return res.json(await getEmployeeById(req.params.id));
});

employeeRouter.route('/employee/:id').delete(async (req, res) => {
    return res.json(await deleteEmployee(req.params.id));
})

export default employeeRouter;