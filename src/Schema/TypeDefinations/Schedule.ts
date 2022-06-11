import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { ClassGroupType } from './Class_Group'
import { AttendanceType } from './Attendance'

export const ScheduleType:any = new GraphQLObjectType({
    name: 'Schedule',
    fields: () => ({
        Schedule_ID: {type: GraphQLID},
        Class_Group_ID_val: {type: GraphQLID},
        Class_Group_ID: {type: ClassGroupType},
        Start_Time : {type: GraphQLString}, //y is this also a primary key
        End_Time: {type: GraphQLString},  
        Description: {type: GraphQLString},
        Attendance: {type: new GraphQLList(AttendanceType)},
        
        // PRIMARY KEY (DTT_Class_Group_ID, Start_Time),
        // FOREIGN KEY (DTT_Class_Group_ID) REFERENCES Class_Group(Class_Group_ID)
    })
})