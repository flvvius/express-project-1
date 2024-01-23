import express from 'express';
import { createJob, createJobEmployee, getJobsAndEmployees } from '../dataAccess/JoburiDA.js';

const joburiRouter = express.Router();

joburiRouter.route('/job').post(async (req, res) => {
    return res.json(await createJob(req.body));
})

joburiRouter.route('/jobEmployee').post(async (req, res) => {
    return res.json(await createJobEmployee(req.body));
});

joburiRouter.route('/jobEmployee').get(async (req, res) => {
    return res.json(await getJobsAndEmployees());
})

export default joburiRouter;