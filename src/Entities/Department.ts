import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from "typeorm";
import { Course } from "./Course";
import { Student } from "./Student";
import { Teacher } from "./Teacher";


@Entity('Department')
export class Department extends BaseEntity {
    @PrimaryColumn()
    Department_ID !: number;
    @Column()
    Department_Name !: string;


    //not required actually
    @OneToMany(type => Course, course => course.Course_Dept_ID)
    Courses!: Promise<Course[]>;
    @OneToMany(type => Teacher , teacher => teacher.Department_ID)
    Teachers!: Promise<Teacher[]>;
    @OneToMany(type => Student , student => student.Department_ID)
    Students!: Promise<Student[]>;
}



// export const Department = new GraphQLObjectType({
//     name: 'Department',
//     fields: () => ({
//         Department_ID: {type: GraphQLID},
//         Department_Name : {type: GraphQLString},
//         // PRIMARY KEY (Department_ID)
//     })
// })