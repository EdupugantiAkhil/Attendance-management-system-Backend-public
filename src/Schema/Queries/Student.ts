import {GraphQLList, GraphQLID} from 'graphql';
import {StudentType} from '../TypeDefinations/Student';
import {Student} from '../../Entities/Student';
export const GET_ALL_STUDENT = {
    type: new GraphQLList(StudentType),
    resolve: () => {
        return Student.find();
    }
}

export const GET_STUDENTS = {
    type: new GraphQLList(StudentType),
    args: {
        Student_USN: {type: GraphQLID},
        Class_Group_ID: {type: GraphQLID},
    },
    resolve:async (parent: any, args: any, context: any)=> {
        console.log(args);
        //if USN is NOT NULL and Class_Group_ID is NOT NULL
        if(args.Student_USN !== undefined && args.Class_Group_ID !== undefined){
            return await Student.find({where: {Student_USN: args.Student_USN, Class_Group_ID: args.Class_Group_ID}, relations: ['Enrolls']});
        }
        //if USN is NULL and Class_Group_ID is NOT NULL
        if(args.Student_USN === undefined && args.Class_Group_ID !== undefined){//check if this works or not
            return await Student.find({where: {Class_Group_ID: args.Class_Group_ID}, relations: ['Enrolls']});
        }
        //if USN is NOT NULL and Class_Group_ID is NULL
        if(args.Student_USN !== undefined && args.Class_Group_ID === undefined){
            return await Student.find({Student_USN: args.Student_USN});
        }
        //if USN is NULL and Class_Group_ID is NULL
        if(args.Student_USN == undefined && args.Class_Group_ID === undefined){
            return await Student.find();
        }
        return Student.find();
    }
}