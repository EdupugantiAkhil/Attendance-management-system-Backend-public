import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { ScheduleType } from '../TypeDefinations/Schedule'
import { Schedule } from '../../Entities/Schedule'

export const ADD_Schedule_ENTRY = {
    type: ScheduleType,
    args: {
        Class_Group_ID: {type: GraphQLID},
        Start_Time: {type: GraphQLString},
        End_Time: {type: GraphQLString},
        Description: {type: GraphQLString},
    },
    resolve: async (parent: any, args: any, context: any) => { //check if time works
        const dynamic_time_table = new Schedule();
        dynamic_time_table.Class_Group_ID_val  = args.Class_Group_ID;
        dynamic_time_table.Start_Time = args.Start_Time;
        dynamic_time_table.End_Time = args.End_Time;
        dynamic_time_table.Description = args.Description;
        await dynamic_time_table.save();
        return dynamic_time_table;
    }
}
