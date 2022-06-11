import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, OneToMany ,JoinColumn, OneToOne} from "typeorm";
import { Department } from "./Department";
import { Class_Group } from "./Class_Group";
import { Student } from "./Student";
import { Users } from "./Users";
@Entity('Teacher')
export class Teacher extends BaseEntity {
    @PrimaryColumn()
    Teacher_SAP_ID !: string;

    @OneToOne(type => Users, users => users.User_ID, {onDelete: 'CASCADE'})
    @JoinColumn({ name: "User_ID" })
    User_ID!: Promise<Users>;

    // @Column()
    // Teacher_Personal_Email !: string;
    // @Column()
    // Teacher_Address !: string;
    // @Column()
    // Teacher_Email !: string;
    // @Column()
    // First_Name !: string;
    // @Column()
    // Middle_Name !: string;
    // @Column()
    // Last_Name !: string;
    // @Column()
    // Mobile_Number !: string;//change the other one also to string 
    // // @PrimaryColumn()
    @ManyToOne(() => Department, department => department.Department_ID, {onDelete: 'SET NULL'})
    @JoinColumn({ name: "Department_ID" })
    Department_ID !: Promise<Department>;
    // Dept_ID !: number;

    //TypeORM only stuff
    @OneToMany(type => Class_Group , class_group => class_group.Teacher)
    Class_Groups!: Promise<Class_Group[]>;
    //change it to counciling later
    @OneToMany(type => Student, student => student.Counselor)
    Student_List !: Promise<Student[]>;
}


// import {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLInt , GraphQLList} from 'graphql'

// export const TeacherType = new GraphQLObjectType({
//     name: 'Teacher',
//     fields: () => ({
//         SAP_ID: {type: GraphQLID},
//         Teacher_Personal_Email : {type: GraphQLString},
//         Teacher_Address : {type: GraphQLString},
//         Teacher_Email : {type: GraphQLString},
//         First_Name : {type: GraphQLString},
//         Middle_Name : {type: GraphQLString},
//         Last_Name : {type: GraphQLString},
//         Mobile_Number : {type: GraphQLString},//change the other one also to string 
//         Dept_ID : {type: GraphQLID},
//         // PRIMARY KEY (SAP_ID),
//         // FOREIGN KEY (Dept_ID) REFERENCES Department (Department_ID)
//     })
// })