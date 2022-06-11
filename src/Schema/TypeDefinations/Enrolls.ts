import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'

export const EnrollsType = new GraphQLObjectType({
    name: 'Enrolls',
    fields: () => ({
        Student_USN: {type: GraphQLID},
        Class_Group_ID: {type: GraphQLID},
        // CONSTRAINT PK_Enrolls PRIMARY KEY (Student_USN, Class_Group_ID),
        // FOREIGN KEY (Student_USN) REFERENCES Student (USN),
        // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
    })
})