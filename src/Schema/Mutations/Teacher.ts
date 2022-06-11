import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { TeacherType } from '../TypeDefinations/Teacher';
import { Teacher } from '../../Entities/Teacher';
import { getConnection } from 'typeorm';
import { Users } from '../../Entities/Users';


export const ADD_TEACHER = {
    type: TeacherType,
    args: {
        Teacher_SAP_ID: {type: GraphQLID},
        Personal_Email : {type: GraphQLString},
        Address : {type: GraphQLString},
        College_Email : {type: GraphQLString},
        First_Name : {type: GraphQLString},
        Middle_Name : {type: GraphQLString},
        Last_Name : {type: GraphQLString},
        Mobile_Number : {type: GraphQLString},//change the other one also to string 
        Department_ID : {type: GraphQLID},
        // PRIMARY KEY (SAP_ID),
        // FOREIGN KEY (Dept_ID) REFERENCES Department (Department_ID)
    },
    async resolve(parent:any, args:any){ 
        const{Teacher_SAP_ID,Personal_Email,Address,College_Email,First_Name,Middle_Name,Last_Name,Mobile_Number,Department_ID} = args;
        //await Teacher.insert(args);

        //adding teacher detales  to users table
        const connection = getConnection();
        const user = new Users();
        user.First_Name = First_Name;
        user.Middle_Name = Middle_Name;
        user.Last_Name = Last_Name;
        user.Address = Address;
        user.College_Email = College_Email;
        user.Personal_Email = Personal_Email;
        user.Mobile_Number = Mobile_Number;
        await connection.manager.save(user);

        //creating a teacher
        const teacher = new Teacher();
        teacher.Teacher_SAP_ID = Teacher_SAP_ID;
        teacher.Department_ID = Department_ID;
        teacher.User_ID = user as any;
        await connection.manager.save(teacher);
        return teacher;

        //return args; //change it to success later
    }
}