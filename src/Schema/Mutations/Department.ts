import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { DepartmentType } from '../TypeDefinations/Department';
import { Department } from '../../Entities/Department';

export const ADD_DEPARTMENT = {
    type: DepartmentType,
    args: {
        Department_ID: {type: GraphQLID}, // PRIMARY KEY (Department_ID),
        Department_Name: {type: GraphQLString},
    },
    resolve: async (parent: any, args: any, context: any) => {
        const department = new Department();
        department.Department_ID = args.Department_ID;
        department.Department_Name = args.Department_Name;
        await department.save();
        return department;
    }
}