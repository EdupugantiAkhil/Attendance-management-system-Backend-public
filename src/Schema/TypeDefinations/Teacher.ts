import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { ClassGroupType } from './Class_Group'
import { DepartmentType } from './Department'
import { StudentType } from './Student'
import { UserType } from './Users'
export const TeacherType:any = new GraphQLObjectType({
    name: 'Teacher',
    fields: () => ({
        Teacher_SAP_ID: {type: GraphQLID},
        User_ID: {type: UserType},

        // now in Users
        // Teacher_Personal_Email : {type: GraphQLString},
        // Teacher_Address : {type: GraphQLString},
        // Teacher_Email : {type: GraphQLString},
        // First_Name : {type: GraphQLString},
        // Middle_Name : {type: GraphQLString},
        // Last_Name : {type: GraphQLString},
        // Mobile_Number : {type: GraphQLString},//change the other one also to string 
        Department_ID : {type: DepartmentType},
        // PRIMARY KEY (SAP_ID),
        // FOREIGN KEY (Dept_ID) REFERENCES Department (Department_ID)

        Class_Groups: {type: new GraphQLList(ClassGroupType)},
        //change it to counciling later
        Student_List: {type: new GraphQLList(StudentType)},

    })
})