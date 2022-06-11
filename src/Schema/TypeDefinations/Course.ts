import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { ClassGroupType } from './Class_Group'
import { DepartmentType } from './Department'
export const CourseType:any = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        Course_Code: {type: GraphQLID},
        Course_Name: {type: GraphQLString},
        Credits: {type: GraphQLInt},
        Course_Dept_ID: {type: DepartmentType},
        // FOREIGN KEY (Course_Dept_ID) REFERENCES Department (Department_ID)  
        
        Class_Groups: {type: new GraphQLList(ClassGroupType)},
    })
})