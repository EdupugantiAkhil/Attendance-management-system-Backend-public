import { GraphQLObjectType, GraphQLSchema } from "graphql";

import {GET_STUDENTS} from "./Queries/Student";
import {GET_ALL_TEACHER,GET_TEACHER} from "./Queries/Teacher";
import {GET_ATTENDANCE} from "./Queries/Attendance";
import {GET_Schedule} from "./Queries/Schedule";
import { GET_CLASS_GROUP } from "./Queries/Class_Group";

import { MARK_ATTENDANCE,UPDATE_ATTENDANCE } from "./Mutations/Attendance";
import {ADD_STUDENT} from "./Mutations/Student";
import { ADD_TEACHER } from "./Mutations/Teacher";
import {ADD_CLASS_GROUP, ENROLL_STUDENT} from "./Mutations/Class_Group"; //dont use enroll student it dosent work use addEnrollments insterd
import {ADD_COURSE} from "./Mutations/Course";
import {ADD_DEPARTMENT} from "./Mutations/Department";
import {ADD_Schedule_ENTRY} from "./Mutations/Schedule";
import {ADD_ENROLLMNET} from "./Mutations/Enrolls";
import {ADD_TIME_TABLE_ENTRY} from "./Mutations/Time_Table";
import {ADD_GRADE} from "./Mutations/Grade";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getStudents: GET_STUDENTS,//replace whith getStudent
        getAllTeacher: GET_ALL_TEACHER,//replace whith new one ie getTeacher
        getTeacher: GET_TEACHER,
        getAttendance: GET_ATTENDANCE,
        getDynamicTimeTable: GET_Schedule,// dosent work ig (because i dont want 2 use it like this so i didnt bother testing it)
        getClassGroup: GET_CLASS_GROUP,
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addStudent: ADD_STUDENT,
        addTeacher:ADD_TEACHER,
        updateAttendance:UPDATE_ATTENDANCE,
        markAttendance:MARK_ATTENDANCE,
        addClassGroup:ADD_CLASS_GROUP,
        enrollStudent:ENROLL_STUDENT,//dont use dosent work 
        addCourse:ADD_COURSE,
        addDepartment:ADD_DEPARTMENT,
        addDynamicTimeTableEntry:ADD_Schedule_ENTRY,//delete this later (just kept for backwords compatability)
        addSchedule:ADD_Schedule_ENTRY,
        addEnrollments:ADD_ENROLLMNET,
        addGeneratorTimeTableEntry:ADD_TIME_TABLE_ENTRY, //delete this later (just kept for backwords compatability)
        addTimetable: ADD_TIME_TABLE_ENTRY,
        addGrade:ADD_GRADE
    }
});


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})