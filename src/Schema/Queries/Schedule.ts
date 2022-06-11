import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { ScheduleType } from "../TypeDefinations/Schedule";
import { Schedule } from "../../Entities/Schedule";
import { getConnection } from "typeorm";

export const GET_Schedule = { //test once
    type: new GraphQLList(ScheduleType),
    args: {
        Class_Group_ID: { type: new GraphQLList(GraphQLID) },
        Date: { type: GraphQLString },
    },
    resolve: async (args: any) => {
        const timetable = await getConnection().createQueryBuilder()
        .select("*")
        .from(Schedule, "dtt")
        .where("dtt.Class_Group_ID IN (:...Class_Group_ID)", { Class_Group_ID: args.Class_Group_ID })
        .getMany();
        return timetable;
    }
}
