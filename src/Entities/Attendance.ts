import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
//import { Class_Group } from "./Class_Group";
import { Schedule } from "./Schedule";
import { Student } from "./Student";
//fix this i blunderd ig


@Entity('Attendance')
export class Attendance extends BaseEntity {

    @PrimaryColumn({name: 'Student_USN'})
    Student_USN_val !: string // PRIMARY KEY (Student_USN),
    
    // //remove this later
    // @PrimaryGeneratedColumn()
    // Attendance_ID !: number;

    // @PrimaryColumn()
    @ManyToOne(type => Student , student => student.Student_USN)
    @JoinColumn({ name: "Student_USN" })
    Student_USN !: Promise<Student>; 
    // @Column()
    
    @PrimaryColumn({name: 'Schedule_ID'})
    Schedule_ID_val !: number

    @ManyToOne(() => Schedule , schedule => schedule.Schedule_ID, {onDelete: 'CASCADE'})
    @JoinColumn({ name: "Schedule_ID" })
    Schedule_ID !: Promise<Schedule>;
    // Class_Group_ID !: number // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
    @Column({
        type: "char",
        length: 1
    })
    Attendance_Status !:string;
}



// export const AttendanceType = new GraphQLObjectType({
//     name: 'Attendance',
//     fields: () => ({
//         Student_USN: {type: GraphQLID}, // PRIMARY KEY (Student_USN),
//         Class_Group_ID:{type: GraphQLInt}, // FOREIGN KEY (Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
//         Date:{type: GraphQLString},//check if date exitst
//         Attendance_Status:{type: GraphQLString},
//         // PRIMARY KEY (Student_USN, Class_Group_ID, Date),
//         // FOREIGN KEY (Student_USN) REFERENCES Student (USN),
//         // FOREIGN KEY (CAttendancelass_Group_ID) REFERENCES Class_Group (Class_Group_ID)
//     })
// })