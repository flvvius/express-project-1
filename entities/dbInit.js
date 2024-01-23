import Employee from "./Employee.js";
import Adresa from "./Adresa.js";
import Joburi from "./Joburi.js";

const FK_config = () => {
    Employee.hasMany(Adresa, {as: "Adrese", foreignKey: "EmployeeId"});
    Adresa.belongsTo(Employee, {foreignKey: "EmployeeId"});

    Employee.belongsToMany(Joburi, {through: "JobEmployee", as: "Jobs", foreignKey: "EmployeeId"});
    Joburi.belongsToMany(Employee, {through: "JobEmployee", as: "Employees", foreignKey: "JobId"});
}

const dbInit = () => {
    FK_config();
}

export default dbInit;