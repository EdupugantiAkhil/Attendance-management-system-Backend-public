import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'
import { CourseType } from '../TypeDefinations/Course'
import { Course } from '../../Entities/Course';


export const ADD_COURSE = {
    type: CourseType,
    args: {
        Course_Code: {type: GraphQLID}, // PRIMARY KEY (Course_Code),
        Course_Name: {type: GraphQLString},
        Credits: {type: GraphQLInt},
        Department_ID: {type: GraphQLID}, // Not Null
        // Course_Description: {type: GraphQLString}, // Not Null
        // Course_Credits: {type: GraphQLInt}, // Not Null
        // Course_Type: {type: GraphQLString}, // Not Null
        // Course_Prerequisite: {type: GraphQLString}, // Not Null
        // Course_Co_Requisite: {type: GraphQLString}, // Not Null

    },
    resolve: async (parent: any, args: any, context: any) => {  
        const course = new Course();
        course.Course_Code = args.Course_Code;
        course.Course_Name = args.Course_Name;
        course.Credits = args.Credits;
        course.Course_Dept_ID = args.Department_ID;
        // course.Course_Description = args.Course_Description;
        // course.Course_Credits = args.Course_Credits;
        // course.Course_Type = args.Course_Type;
        // course.Course_Prerequisite = args.Course_Prerequisite;
        // course.Course_Co_Requisite = args.Course_Co_Requisite;
        await course.save();
        return course;
    }
}

// // idk why this is happning 

// when adding 
// // query: SELECT `Course`.`Course_Code` AS `Course_Course_Code`, `Course`.`Course_Name` AS `Course_Course_Name`, `Course`.`Credits` AS `Course_Credits` FROM `Course` `Course` WHERE `Course`.`Course_Code` IN (?) -- PARAMETERS: ["18CS11"]
// // query: START TRANSACTION
// // query: INSERT INTO `Course`(`Course_Code`, `Course_Name`, `Credits`) VALUES (?, ?, ?) -- PARAMETERS: ["18CS11","Prog in C",3]
// // query: COMMIT

// when already added (its not showing primary key error or query failed)
// // query: SELECT `Course`.`Course_Code` AS `Course_Course_Code`, `Course`.`Course_Name` AS `Course_Course_Name`, `Course`.`Credits` AS `Course_Credits` FROM `Course` `Course` WHERE `Course`.`Course_Code` IN (?) -- PARAMETERS: ["18CS11"]