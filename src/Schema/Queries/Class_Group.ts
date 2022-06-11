import {GraphQLList, GraphQLID ,GraphQLInt} from 'graphql';
import { ClassGroupType } from '../TypeDefinations/Class_Group';
import { Class_Group } from '../../Entities/Class_Group';
export const GET_CLASS_GROUP = { //i dont think we need this (add this later)
    type: new GraphQLList(ClassGroupType),
    args: {
        Class_Group_ID: {type: GraphQLID},
        Year: {type: GraphQLInt},
        Semester: {type: GraphQLInt},
        Teacher_SAP_ID: {type: GraphQLID},
        Course_Code: {type: GraphQLID},
    },
    resolve: async (parent: any, args: any, context: any) => { //check null and undefined cases
        //if class_group_id is not null and undefined and all other fields are null or undefined  then return all class_groups
        if(args.Class_Group_ID != null && args.Class_Group_ID != undefined && args.Year == null && args.Semester == null && args.Teacher_SAP_ID == null && args.Course_Code == null){
            return await Class_Group.find({where: {Class_Group_ID: args.Class_Group_ID}});
        }else
        //if Cours code is not null or undefined and all other fields are null then return all class_groups
        if(args.Class_Group_ID == null && args.Year == null && args.Semester == null && args.Teacher_SAP_ID == null && args.Course_Code != null){
            return await Class_Group.find({where: {Course_Code: args.Course_Code}});
        }else
        //if teacher sap_id is not null and all other fields are null then return all class_groups
        if(args.Class_Group_ID == null && args.Year == null && args.Semester == null && args.Teacher_SAP_ID != null && args.Course_Code == null){
            return await Class_Group.find({where: {Teacher_SAP_ID: args.Teacher_SAP_ID}});
        }else
        //if semister and year is not null and all other fields are null then return all class_groups
        if(args.Class_Group_ID == null &&  args.Year != null && args.Semester != null && args.Teacher_SAP_ID == null && args.Course_Code == null){
            return await Class_Group.find({where: {Year: args.Year, Semester: args.Semester}});
        }else
        //if all are null then return all class_groups
        if(args.Class_Group_ID == null && args.Year == null && args.Semester == null && args.Teacher_SAP_ID == null && args.Course_Code == null){
            return await Class_Group.find();
        }
        }

    }
