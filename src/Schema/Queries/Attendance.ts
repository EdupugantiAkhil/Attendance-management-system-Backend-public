import {GraphQLList, GraphQLID} from 'graphql';
import { AttendanceType } from '../TypeDefinations/Attendance';
import { Attendance } from '../../Entities/Attendance';

export const GET_ATTENDANCE = {
    type: new GraphQLList(AttendanceType),
    args: {
        Student_USN: {type: GraphQLID},
        Schedule_ID: {type: GraphQLID},
    },
    resolve: (args:any) => {
        //if Schedule_ID is not null and Student_USN is not null
        if(args.Schedule_ID !== undefined && args.Schedule_ID !== null && args.Schedule_ID !== '' && args.Schedule_ID !== 'null' && args.Schedule_ID !== 'undefined' && args.Student_USN !== undefined && args.Student_USN !== null && args.Student_USN !== '' && args.Student_USN !== 'null' && args.Student_USN !== 'undefined'){
            return Attendance.find({Schedule_ID: args.Schedule_ID, Student_USN: args.Student_USN});
        }else
        //if Schedule_ID is not null
        if(args.Schedule_ID !== undefined && args.Schedule_ID !== null && args.Schedule_ID !== '' && args.Schedule_ID !== 'null' && args.Schedule_ID !== 'undefined'){
            return Attendance.find({Schedule_ID: args.Schedule_ID});
        }else 
        //if Student_USN is not null
        if(args.Student_USN !== undefined && args.Student_USN !== null && args.Student_USN !== '' && args.Student_USN !== 'null' && args.Student_USN !== 'undefined'){
            return Attendance.find({Student_USN: args.Student_USN});
        }else
        return Attendance.find();//should delete it later ig 
    }
}