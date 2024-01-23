import express from 'express'
import env from 'dotenv'
import dbInit from './entities/dbInit.js';
import createDbRouter from './routes/createDbRouter.js';
import employeeRouter from './routes/EmployeeRouter.js';
import joburiRouter from './routes/JoburiRouter.js';

env.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

dbInit();

app.use('/api', createDbRouter);
app.use('/api', employeeRouter);
app.use('/api', joburiRouter);

const port = process.env.PORT || 8000;

app.listen(port);
console.log("App is listening on port " + port);
