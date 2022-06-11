import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinTable, JoinColumn } from "typeorm";
//import { Enrolls } from "./Enrolls";
import { Student } from "./Student";
import {Class_Group} from "./Class_Group";

@Entity('Grade')
export class Grade extends BaseEntity{
    @PrimaryColumn()
    @ManyToOne(type => Student , student => student.Student_USN)
    @JoinColumn({ name: "Student_USN" })
    Student_USN !: string;

    @PrimaryColumn({ name: "Class_Group_ID" })
    Class_Group_ID_val !: number;

    @ManyToOne(type => Class_Group , class_group => class_group.Class_Group_ID)
    @JoinColumn({ name: "Class_Group_ID" })
    Class_Group_ID !: Promise<Class_Group>;//see if i have to change to class_group type

    //i want 2 do like this but the table we made it dosent make sense
    // @ManyToOne(() => Enrolls)
    // @JoinColumn({name: 'Student_USN', referencedColumnName: 'Student_USN'},
    // {name: 'Class_Group_ID', referencedColumnName: 'Class_Group_ID'})
    // Enrolls: Enrolls;

    // @PrimaryColumn()
    // Student_USN !: string;
    // @PrimaryColumn()
    // Class_Group_ID !: number;
    @PrimaryColumn()
    Test_Name !: string;
    @Column()
    Test_Marks !: number;
}


// import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'

// export const Grade = new GraphQLObjectType({
//     name: 'Grade',
//     fields: () => ({
//         Student_USN : {type : GraphQLID},
//         Class_Group_ID : {type : GraphQLID},
//         Test_Name : {type : GraphQLID},
//         Test_Marks: {type : GraphQLInt},
//         // PRIMARY KEY (Student_USN, Class_Group_ID, Test_Name),
//         // FOREIGN KEY (Student_USN) REFERENCES Student (USN),
//         // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
//     })
// })