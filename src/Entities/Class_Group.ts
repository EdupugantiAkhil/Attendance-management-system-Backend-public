import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { Attendance } from "./Attendance";
import { Course } from "./Course";
import { Schedule } from "./Schedule";
import { Time_Table } from "./Time_Table";
//import { Enrolls } from "./Enrolls";
import { Grade } from "./Grade";
import { Student } from "./Student";
import {Teacher} from "./Teacher";
@Entity('Class_Group')
export class Class_Group extends BaseEntity {
    @PrimaryColumn()
    Class_Group_ID !: number;
    @Column()
    Classroom_Number!: number;
    @Column()
    Year!: number;
    @Column()
    Semester !: number;
    // @Column()
    @ManyToOne(type => Teacher, teacher => teacher.Teacher_SAP_ID)
    // Teacher_SAP_ID !: string;
    @JoinColumn({name: 'Teacher_SAP_ID'})
    Teacher !: Promise<Teacher>; //can i or should i change this to teacher?
    // @Column()
    @ManyToOne(() => Course, Course => Course.Course_Code, {onDelete: 'SET NULL'})
    @JoinColumn({name: 'Course_Code'})
    Course_Code !: Promise<Course>;

    //the typeORM only stuff
    // @OneToMany(type => Enrolls , enrolls => enrolls.Class_Group_ID)
    // Enrolls!: Enrolls[];//student enrolls in a class
    @ManyToMany(type => Student, student => student.Class_Group_List)
    @JoinTable({name: 'Enrolls'
    ,joinColumn: {name: 'Class_Group_ID', referencedColumnName: 'Class_Group_ID'}
    ,inverseJoinColumn: {name: 'Student_USN', referencedColumnName: 'Student_USN'}})
    Students!: Promise<Student[]>;//student in a class group



    @OneToMany(type => Grade , grade => grade.Class_Group_ID)
    Grades!: Promise<Grade[]>;
    @OneToMany(type => Attendance , attendance => attendance.Schedule_ID)
    Attendances!: Promise<Attendance[]>;
    @OneToMany(type => Schedule , dynamic_time_table => dynamic_time_table.Class_Group_ID ) //didnt rename dynamic_time_table to schudule
    Schedule!: Promise<Schedule[]>;
    @OneToMany(type => Time_Table , generator_time_table => generator_time_table.Class_Group_ID) //didnt rename generator_time_table to Time_Table
    Time_Table!: Promise<Time_Table[]>;

}


// export const Class_Group  = new GraphQLObjectType({
//     name: 'Class_Group',
//     fields: () => ({
//         Class_Group_ID: {type: GraphQLID},
//         Classroom_Number: {type: GraphQLInt},
//         Year: {type: GraphQLInt},
//         Semester: {type: GraphQLInt},
//         Teacher_SAP_ID: {type: GraphQLID},
//         Course_Code: {type: GraphQLID},
//         // PRIMARY KEY (Class_Group_ID)
//         // FOREIGN KEY (Teacher_SAP_ID) REFERENCES Teacher (SAP_ID),
//         // FOREIGN KEY (Course_Code) REFERENCES Course (Course_Code)
//     }),
// })