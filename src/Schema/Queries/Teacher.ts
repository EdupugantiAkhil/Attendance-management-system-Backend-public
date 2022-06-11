import {GraphQLList, GraphQLID} from 'graphql';
import { TeacherType } from '../TypeDefinations/Teacher';
import { Teacher } from '../../Entities/Teacher';

export const GET_ALL_TEACHER = {
    type: new GraphQLList(TeacherType),
    resolve: () => {
        return Teacher.find();
    }
}

// export const GET_TEACHER = {
//     type: new GraphQLList(TeacherType),
//     args: {
//         SAP_ID: {type: GraphQLID},
//         Department_ID: {type: GraphQLID},
//         Class_Group_ID: {type: GraphQLID},
//     },
//     resolve: (parent: any, args: any, context: any) => {
//         if (args.SAP_ID !== undefined && args.SAP_ID !== null && args.SAP_ID !== '' && args.SAP_ID !== 'null' && args.SAP_ID !== 'undefined') {
//             return Teacher.find({SAP_ID: args.SAP_ID} || {Department_ID: args.Department_ID});
//             //return {Teacher.findOne({SAP_ID: args.SAP_ID})};
//         }else 
//         //check if the Department_ID is not null
//         if(args.Department_ID !== undefined && args.Department_ID !== null && args.Department_ID !== '' && args.Department_ID !== 'null' && args.Department_ID !== 'undefined'){
//             return Teacher.find({where:{Department_ID: args.Department_ID}});// FIXX this
//         }        
//         else{
//             return Teacher.find();
//     }
//     }
// }

export const GET_TEACHER = {
    type: new GraphQLList(TeacherType),
    args: {
        Teacher_SAP_ID: {type: GraphQLID},
        Department_ID: {type: GraphQLID},
        Class_Group_ID: {type: GraphQLID},
    },
    resolve: async (parent: any, args: any, context: any) => {
        //if all are null
        console.log(args);
        console.log('hello')
        if(args.Teacher_SAP_ID === undefined && args.Department_ID === undefined && args.Class_Group_ID === undefined){
            let a = await Teacher.find();
            console.log('before')
            console.log(a);
            return a;
        }
        //if SAP_ID is not null
        if(args.Teacher_SAP_ID !== undefined && args.Teacher_SAP_ID !== null && args.Teacher_SAP_ID !== '' && args.Teacher_SAP_ID !== 'null' && args.Teacher_SAP_ID !== 'undefined'){
            return Teacher.find({Teacher_SAP_ID: args.Teacher_SAP_ID});
        }
        //if Department_ID is not null
        if(args.Department_ID !== undefined && args.Department_ID !== null && args.Department_ID !== '' && args.Department_ID !== 'null' && args.Department_ID !== 'undefined'){
            return Teacher.find({where:{Department_ID: args.Department_ID}});
        }
        //if Class_Group_ID is not null
        if(args.Class_Group_ID !== undefined && args.Class_Group_ID !== null && args.Class_Group_ID !== '' && args.Class_Group_ID !== 'null' && args.Class_Group_ID !== 'undefined'){
            return Teacher.find({where:{Class_Group_ID: args.Class_Group_ID}, relations: ['Class_Group']});
        }
    }
    }