import Joburi from "../entities/Joburi.js";
import JobEmployee from "../entities/JobEmployee.js";
import Employee from "../entities/Employee.js";

const createJob = async (job) => {
    return await Joburi.create(job);
}

const createJobEmployee = async (jobEmployee) => {
    return await JobEmployee.create(jobEmployee);
}

const getJobsAndEmployees = async () => {
    return await Joburi.findAll({
        include: [
            {
                model: Employee,
                as: "Employees"
            }
        ]
    })
}

export {createJob, createJobEmployee, getJobsAndEmployees};