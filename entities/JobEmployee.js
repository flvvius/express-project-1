import db from '../dbConfig.js'
import Sequelize from 'sequelize'

const JobEmployee = db.define("JobEmployee", {
    JobId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    EmployeeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    }
});

export default JobEmployee;