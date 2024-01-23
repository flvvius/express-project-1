import express from 'express'
import db from '../dbConfig.js'

let createDbRouter = express.Router();

createDbRouter.route('/create').get(async (req, res) => {
    try {
        await db.sync({force: true})
        res.status(200).send("Baza de date create cu succes!");
    } catch(err) {
        console.warn(err);
        res.status(500).send("Eroare la crearea bd!");
    }
})

export default createDbRouter;