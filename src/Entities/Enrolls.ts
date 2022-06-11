//this might not be required cause i used join table

// import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, ManyToMany } from "typeorm";
// import { Student } from "./Student";
// import { Class_Group } from "./Class_Group";
// @Entity('Enrolls')
// export class Enrolls extends BaseEntity {
//     // @PrimaryColumn()
//     // Student_USN!: number;
//     // @PrimaryColumn()
//     // Class_Group_ID!: number;
//     @ManyToOne(type => Student, student => student.USN)
//     Student_USN!: Student;
//     @ManyToOne(() => Class_Group , class_group => class_group.Class_Group_ID)
//     Class_Group_ID!: Class_Group;

//     //remove this later
//     @PrimaryGeneratedColumn()
//     Enrolls_ID!: number;
// }











// export const Enrolls = new GraphQLObjectType({
//     name: 'Enrolls',
//     fields: () => ({
//         Student_USN: {type: GraphQLID},
//         Class_Group_ID: {type: GraphQLID},
//         // CONSTRAINT PK_Enrolls PRIMARY KEY (Student_USN, Class_Group_ID),
//         // FOREIGN KEY (Student_USN) REFERENCES Student (USN),
//         // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
//     })
// })