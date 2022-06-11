import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'

export const TimeTableType = new GraphQLObjectType({
    name: 'Time_Table',
    fields: () => ({
        Class_Group_ID: {type: GraphQLID},
        Day : {type: GraphQLID},
        Start_Time : {type: GraphQLID},
        End_Time: {type: GraphQLString},     
        // PRIMARY KEY (GTT_Class_Group_ID, Start_Time, Day),
        // FOREIGN KEY (GTT_Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
    })
})