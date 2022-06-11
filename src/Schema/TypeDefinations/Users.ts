import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'


export const UserType:any = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        User_ID :{type: GraphQLID}, // PRIMARY KEY (User_ID),
        First_Name :{type: GraphQLString},
        Middle_Name :{type: GraphQLString},
        Last_Name :{type: GraphQLString},
        Address :{type: GraphQLString},
        College_Email :{type: GraphQLString},
        Personal_Email :{type: GraphQLString},
        Mobile_Number :{type: GraphQLString},
    }),
})
