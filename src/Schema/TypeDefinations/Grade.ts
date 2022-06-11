import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { ClassGroupType } from './Class_Group'
export const GradeType = new GraphQLObjectType({
    name: 'Grade',
    fields: () => ({
        Student_USN : {type : GraphQLID},
        Class_Group_ID_val: {type : GraphQLID},
        Class_Group_ID : {type : ClassGroupType},
        Test_Name : {type : GraphQLID},
        Test_Marks: {type : GraphQLInt},
        // PRIMARY KEY (Student_USN, Class_Group_ID, Test_Name),
        // FOREIGN KEY (Student_USN) REFERENCES Student (USN),
        // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
    })
})