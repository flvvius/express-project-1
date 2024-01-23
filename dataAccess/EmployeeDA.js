import Employee from "../entities/Employee.js";
import Adresa from "../entities/Adresa.js";
import LikeOp from "./Operators.js";

const createEmployee = async (employee) => {
    return await Employee.create(employee, {include: [{model: Adresa, as: "Adrese"}]});
}

const getEmployees = async () => {
    return await Employee.findAll({include: ["Adrese"]});
}

const getEmployeeById = async (id) => {
    return await Employee.findByPk(id, {include: ["Adrese"]});
}

const deleteEmployee = async (id) => {
    const elem = Employee.findByPk(id, {include: ["Adrese"]});

    if (!elem) {
        console.log("No employee found!");
        return;
    }

    return await elem.destroy();
}

export {
    createEmployee,
    getEmployees,
    getEmployeeById,
    deleteEmployee
}