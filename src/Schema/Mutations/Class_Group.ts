import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { Class_Group } from '../../Entities/Class_Group';
import { ClassGroupType } from '../TypeDefinations/Class_Group';
import { Student } from '../../Entities/Student';

export const ADD_CLASS_GROUP = {
    type: ClassGroupType,
    args: {
        Class_Group_ID: {type: GraphQLID},
        Classroom_Number: {type: GraphQLInt},
        Year: {type: GraphQLInt},
        Semester: {type: GraphQLInt},
        Teacher_SAP_ID: {type: GraphQLID},
        Course_Code: {type: GraphQLID},
    },
    resolve: async (parent: any, args: any, context: any) => { 
        const class_group = new Class_Group();
        class_group.Class_Group_ID = args.Class_Group_ID;
        class_group.Classroom_Number = args.Classroom_Number;
        class_group.Year = args.Year;
        class_group.Semester = args.Semester;
        class_group.Teacher = args.Teacher_SAP_ID;
        class_group.Course_Code = args.Course_Code;
        await class_group.save();
        return class_group;
    }
}

//not working fix later 
export const ENROLL_STUDENT = {
    type: ClassGroupType,
    args: {
        Student_USN: {type: GraphQLID},
        Class_Group_ID: {type: GraphQLID},
    },
    resolve: async (parent: any, args: any, context: any) => {
        // const class_group = await Class_Group.findOne({where: {Class_Group_ID: args.Class_Group_ID}});
        // if(!class_group) {
        //     throw new Error('Class Group not found');
        // }
        // // check if student exists
        // const sutdentexist = await Student.findOne({where: {USN: args.Student_USN}});
        // if(!sutdentexist) {
        //     throw new Error('Student not found');
        // }
        // const student = await Class_Group.findOne({where: {USN: args.Student_USN ,Class_Group_ID: args.Class_Group_ID}});
        // if(student) {
        //     throw new Error('Student is already enrolled');
        // }
        // // if check if student exists in students
        
        // await class_group.Students.push(args.Student_USN);
        // await class_group.save();
        // return class_group;
    }
        // const class_group = await Class_Group.findOne({where: {Class_Group_ID: args.Class_Group_ID}}) as Class_Group;
        // class_group.Students.push(args.Student_USN);
        // await class_group.save();
        // return class_group;
}