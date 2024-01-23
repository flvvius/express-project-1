import db from '../dbConfig.js'
import Sequelize from 'sequelize'

const Joburi = db.define("Joburi", {
    JobId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    JobName: 
    { 
        type: Sequelize.STRING,
        allowNull: false
    },

    JobDescription:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Joburi;