import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { TimeTableType } from '../TypeDefinations/Time_Table';
import { Time_Table } from '../../Entities/Time_Table';

export const ADD_TIME_TABLE_ENTRY = {
    type: TimeTableType,
    args: {
        Class_Group_ID: {type: GraphQLID}, //we have to rename later just kept it like this for backwords compatabality whith input data
        Day : {type: GraphQLID},
        Start_Time : {type: GraphQLID},
        End_Time: {type: GraphQLString},
    },
    resolve: async (parent: any, args: any, context: any) => { //check if time works
        const generator_time_table = new Time_Table();
        generator_time_table.Class_Group_ID = args.Class_Group_ID;
        generator_time_table.Day = args.Day;
        generator_time_table.Start_Time = args.Start_Time;
        generator_time_table.End_Time = args.End_Time;
        await generator_time_table.save();
        return generator_time_table;
    }
}
