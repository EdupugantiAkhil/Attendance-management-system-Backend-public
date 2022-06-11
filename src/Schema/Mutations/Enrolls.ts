import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { EnrollsType } from '../TypeDefinations/Enrolls'
// import { Enrolls } from '../../Entities/Enrolls';
import { Class_Group } from '../../Entities/Class_Group';
import { getConnection, getRepository } from 'typeorm';
import { Student } from '../../Entities/Student';

export const ADD_ENROLLMNET = {
    type: EnrollsType,
    args: {
        Student_USN: {type: GraphQLID}, // PRIMARY KEY (Student_USN, Class_Group_ID),
        Class_Group_ID: {type: GraphQLID},
    },
    resolve: async (parent: any, args: any, context: any) => {
        let classGroup = await getConnection().getRepository(Class_Group).findOne({Class_Group_ID: args.Class_Group_ID});
        let student = await getConnection().getRepository(Student).findOne({Student_USN: args.Student_USN});
        await getConnection().createQueryBuilder().relation(Class_Group, 'Students').of(classGroup).add(student);
        return null;
        // const {Student_USN,Class_Group_ID} = args;
        // const classGroup = getRepository(Class_Group);
        // const cg = await classGroup.findOne({Class_Group_ID: Class_Group_ID});
        // if(cg!= undefined){
        //     cg.Students.push(Student_USN);
        //     await getRepository(Class_Group).save(classGroup);
        // }

        // const enrolls = new Enrolls();
        // enrolls.Student_USN = args.Student_USN;
        // enrolls.Class_Group_ID = args.Class_Group_ID;
        // await enrolls.save();
        // return enrolls;
        //return student;
    }
}