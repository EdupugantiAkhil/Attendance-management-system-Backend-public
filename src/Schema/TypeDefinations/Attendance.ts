import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { ClassGroupType } from './Class_Group'
import { ScheduleType } from './Schedule'
import { StudentType } from './Student'
// export const StudentType = new GraphQLObjectType({
//     name: 'Student',
//     fields: () => ({
//         USN :{type: GraphQLID}, // PRIMARY KEY (USN),
//         First_Name :{type: GraphQLString},
//         Middle_NamAttendancee :{type: GraphQLString},
//         Last_Name :{type: GraphQLString},
//         Student_Address :{type: GraphQLString},
//         Student_Email :{type: GraphQLString},
//         Student_Personal_Email :{type: GraphQLString},
//         Mobile_Number :{type: GraphQLInt},
//         Department_ID :{type: GraphQLInt}, // FOREIGN KEY (Department_ID) REFERENCES Department (Department_ID) deal whith this later



//     }),
// })

export const AttendanceType = new GraphQLObjectType({
    name: 'Attendance',
    fields: () => ({
        Student_USN: {type: StudentType}, // PRIMARY KEY (USN),
        Student_USN_val: {type: GraphQLID},
        Schedule_ID:{type: ScheduleType}, // FOREIGN KEY (Schedule_ID) REFERENCES Schedule (Schedule_ID)
        Schedule_ID_val: {type: GraphQLID},
        Attendance_Status:{type: GraphQLString},

        // // Student_USN: {type: StudentType}, // PRIMARY KEY (Student_USN),
        // // Class_Group_ID:{type: ClassGroupType}, // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
        // // Date:{type: GraphQLString},//check if date exitst
        // // Attendance_Status:{type: GraphQLString},
        // // // PRIMARY KEY (Student_USN, Class_Group_ID, Date),
        // // // FOREIGN KEY (Student_USN) REFERENCES Student (USN),
        // // // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
    })
})