import db from '../dbConfig.js'
import Sequelize from 'sequelize'

const Adresa = db.define("Adresa", {
    AdresaId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    AdresaDetail: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    City:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    EmployeeId: 
    {
        type: Sequelize.INTEGER,
        allowNull: false
    } 
});

export default Adresa;