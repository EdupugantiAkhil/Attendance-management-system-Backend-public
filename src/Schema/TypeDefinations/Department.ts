import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { CourseType } from './Course'
import { TeacherType } from './Teacher'
import { StudentType } from './Student'
export const DepartmentType = new GraphQLObjectType({
    name: 'Department',
    fields: () => ({
        Department_ID: {type: GraphQLID},
        Department_Name : {type: GraphQLString},
        // PRIMARY KEY (Department_ID)

        Courses: {type: new GraphQLList(CourseType)},
        Teachers: {type: new GraphQLList(TeacherType)},
        Students: {type: new GraphQLList(StudentType)},
    })
})