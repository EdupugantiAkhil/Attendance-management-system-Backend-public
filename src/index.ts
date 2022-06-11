import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {schema} from './Schema'
import cors from 'cors';
import { createConnection } from 'typeorm';


import {Attendance} from './Entities/Attendance';
import { Class_Group } from './Entities/Class_Group';
import {Course } from './Entities/Course';
import {Department } from './Entities/Department';
import { Schedule} from './Entities/Schedule';
//import {Enrolls } from './Entities/Enrolls';
import {Time_Table } from './Entities/Time_Table';
import { Grade} from './Entities/Grade';
import { Student} from './Entities/Student';
import { Teacher} from './Entities/Teacher';
import { Users } from './Entities/Users';
import { runCustomQuery } from './Schema/Queries/Custumquery';

//Import environment variables
require('dotenv').config();

const main = async () => {

    try {
        await createConnection({

            type: process.env.DB_TYPE as any,
            url:process.env.DB_URL as any,
            connectTimeoutMS: 80000,
            ssl: { rejectUnauthorized: false },
            synchronize: true, 
            dropSchema: true,
            logging: true,
            entities: [Attendance,Course,Class_Group,Department,Schedule, Time_Table,Grade,Student,Teacher,Users],
        }
        );
        console.log('Connected to the database');
        console.log(process.env.DB_TYPE,process.env.DB_URL)
    }
    catch (error) {
        console.log('Could not connect to the database. Exiting now...', error);
        process.exit();
    }
    await runCustomQuery();
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/', graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));
 
    console.log(process.env.PORT)
    app.listen(process.env.PORT, () => {console.log('Server started on http://localhost:'+process.env.PORT)});
}
main().catch((err) => {
    console.log(err);
    });