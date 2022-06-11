import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { GradeType } from '../TypeDefinations/Grade'
import { Grade } from '../../Entities/Grade';

export const ADD_GRADE = {
    type: GradeType,
    args: {
        Student_USN: {type: GraphQLID}, // PRIMARY KEY (Student_USN, Class_Group_ID),
        Class_Group_ID: {type: GraphQLID},
        Test_Name: {type: GraphQLID},
        Test_Marks: {type: GraphQLInt},
    },
    resolve: async (parent: any, args: any, context: any) => {
        const grade = new Grade();
        grade.Student_USN = args.Student_USN;
        grade.Class_Group_ID_val = args.Class_Group_ID;
        grade.Test_Name = args.Test_Name;
        grade.Test_Marks = args.Test_Marks;
        await grade.save();
        return grade;
    }
}