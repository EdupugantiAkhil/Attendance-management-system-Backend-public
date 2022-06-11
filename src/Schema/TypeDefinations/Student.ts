import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { GradeType } from './Grade'
import { AttendanceType } from './Attendance'
import { ClassGroupType } from './Class_Group'
import { DepartmentType } from './Department'
import { TeacherType } from './Teacher'
import { UserType } from './Users'
export const StudentType:any = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        Student_USN :{type: GraphQLID}, // PRIMARY KEY (USN),
        User_ID :{type : UserType}, // FOREIGN KEY (User_ID) REFERENCES Users (User_ID)
        //now implemented through Users
        // First_Name :{type: GraphQLString},
        // Middle_Name :{type: GraphQLString},
        // Last_Name :{type: GraphQLString},
        // Student_Address :{type: GraphQLString},
        // Student_Email :{type: GraphQLString},
        // Student_Personal_Email :{type: GraphQLString},
        // Mobile_Number :{type: GraphQLString},
        Department_ID :{type: DepartmentType}, // FOREIGN KEY (Department_ID) REFERENCES Department (Department_ID) deal whith this later

        Counselor: {type: TeacherType},
        Counselor_val: {type: GraphQLID}, // FOREIGN KEY (Counselor) REFERENCES Teacher (Teacher_ID)
        Grade_List :{type: new GraphQLList(GradeType)},
        Attendance_List :{type: new GraphQLList(AttendanceType)},
        Class_Group_List :{type: new GraphQLList(ClassGroupType)},
    }),
})

