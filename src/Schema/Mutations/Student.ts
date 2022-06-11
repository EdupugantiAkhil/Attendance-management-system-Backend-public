import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import {getConnection} from "typeorm";
import {StudentType} from '../TypeDefinations/Student'
import {Student} from '../../Entities/Student'
import { Users } from '../../Entities/Users'
export const ADD_STUDENT = {
    type: StudentType,
    args: {
        Student_USN :{type: GraphQLID}, // PRIMARY KEY (USN),
        First_Name :{type: GraphQLString},
        Middle_Name :{type: GraphQLString},
        Last_Name :{type: GraphQLString},
        Address :{type: GraphQLString},
        College_Email :{type: GraphQLString},
        Personal_Email :{type: GraphQLString},
        Mobile_Number :{type: GraphQLString},
        Department_ID :{type: GraphQLInt}, // FOREIGN KEY (Department_ID) REFERENCES Department (Department_ID) deal whith this later
        Teacher_SAP_ID :{type: GraphQLID}, // FOREIGN KEY (Counselor) REFERENCES Teacher (SAP_ID)//double check this
    },
    async resolve(parent:any, args:any){ //fix any later
        // const student = new Student({
        //     USN : args.USN,
        //     First_Name : args.First_Name,
        //     Middle_Name : args.Middle_Name,
        //     Last_Name : args.Last_Name,
        //     Student_Address : args.Student_Address,
        //     Student_Email : args.Student_Email,
        //     Student_Personal_Email : args.Student_Personal_Email,
        //     Mobile_Number : args.Mobile_Number,
        //     Department_ID : args.Department_ID,
        // });
        // return student.save();
        const{Student_USN,First_Name,Middle_Name,Last_Name,Address,College_Email,Personal_Email,Mobile_Number,Department_ID} = args;
        // const userVals = {First_Name:First_Name ,
        //     Middle_Name:Middle_Name,
        //     Last_Name:Last_Name,
        //     Address:Student_Address,
        //     Email:Student_Email,
        //     Personal_Email:Student_Personal_Email,
        //     Mobile_Number: Mobile_Number,
        //     College_Email:Student_Email
        // }
        const connection = getConnection();
        console.log("aaa");
        const user = new Users();
        user.First_Name = First_Name;
        user.Middle_Name = Middle_Name;
        user.Last_Name = Last_Name;
        user.Address = Address;
        user.College_Email = College_Email;
        user.Personal_Email = Personal_Email;
        user.Mobile_Number = Mobile_Number;
        await connection.manager.save(user);
        // const user = Users.insert(userVals);
        console.log("aaa",user);
        
        //const studentVals = {USN:Student_USN,Department_ID:Department_ID,User_ID:user,Counselor:args.Teacher_SAP_ID}

        //await Student.insert({USN,First_Name,Middle_Name,Last_Name,Student_Address,Student_Email,Student_Personal_Email,Mobile_Number,Department_ID});
        // await Student.insert(studentVals);
        const student = new Student();
        student.Student_USN = Student_USN as any;
        student.Department_ID = Department_ID;
        student.User_ID = user as any;
        student.Counselor_val = args.Teacher_SAP_ID;
        await connection.manager.save(student);
        return args; //change it to success later
    }
}