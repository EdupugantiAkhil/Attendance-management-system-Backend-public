import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { AttendanceType } from '../TypeDefinations/Attendance'
import { Attendance } from '../../Entities/Attendance'
import { StudentType } from '../TypeDefinations/Student'
export const MARK_ATTENDANCE = {
    type: AttendanceType,
    args: {
        Student_USN: {type: GraphQLID},
        Schedule_ID: {type: GraphQLID},
        Attendance_Status: {type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const{Student_USN,Schedule_ID,Attendance_Status} = args;
        await Attendance.insert({
            Student_USN_val: Student_USN,
            Schedule_ID_val:Schedule_ID,
            Attendance_Status:Attendance_Status,
        });
        // const attendance = new Attendance();
        // attendance.Student_USN = Student_USN;
        // attendance.Class_Group_ID = Class_Group_ID;
        // attendance.Date = Date;
        // attendance.Attendance_Status = Attendance_Status;
        // await attendance.save();
        // return attendance;
        return args;
    }
}

export const UPDATE_ATTENDANCE = {//test if it works
    type: AttendanceType,
    args: {
        Student_USN: {type: GraphQLID},
        Schedule_ID: {type: GraphQLInt},
        Attendance_Status: {type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const{Student_USN,Schedule_ID,attVal} = args;

        const attendance = await Attendance.findOne({Student_USN_val : Student_USN, Schedule_ID_val : Schedule_ID})
        //await Attendance.update({Student_USN : Student_USN,Class_Group_ID:Class_Group_ID,Date:Date},{Attendance_Status:Attendance_Status});
        const Attendance_Status = attendance?.Attendance_Status;
        if(Attendance_Status === 'P'){
            throw new Error('Attendance already marked');
        }else{
            //add the designation spesific logic to update the attendance later
            await Attendance.update({Student_USN_val : Student_USN,Schedule_ID_val : Schedule_ID},{Attendance_Status:'P'});
        }
        return args;
    }
}