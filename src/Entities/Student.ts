import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, OneToMany, ManyToMany ,JoinColumn, OneToOne} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Attendance } from "./Attendance";
import { Department } from "./Department";
//import { Enrolls } from "./Enrolls";
import { Grade } from "./Grade";
import { Class_Group } from "./Class_Group";
import { Teacher } from "./Teacher";
import { Users } from "./Users";
@Entity('Student')
export class Student extends BaseEntity {
    @PrimaryColumn()
    Student_USN!: string; // Primary Key

    @OneToOne(type => Users, users => users.User_ID, {onDelete: 'CASCADE'})
    @JoinColumn({ name: "User_ID" })
    User_ID!: Promise<Users>;
    
    //use Users insterd 
    // @Column ()
    // First_Name !: string; // Not Null
    // @Column({nullable: true,})
    // Middle_Name !: string; // Nullable
    // @Column()
    // Last_Name !: string; // Not Null
    // @Column()
    // Student_Address !: string; // Not Null
    // @Column()
    // Student_Email !: string; // Not Null
    // @Column({nullable: true,})
    // Student_Personal_Email !: string; // Nullable
    // @Column()
    // Mobile_Number !: string; // Not Null //bigint

    @ManyToOne(() => Department, department => department.Department_ID, {onDelete: 'SET NULL'})
    @JoinColumn({ name: "Department_ID" })
    Department_ID !: Promise<Department>; // FOREIGN KEY (Department_ID) REFERENCES Department (Department_ID)


    @Column({ name: "counselor" })
    Counselor_val!: string; // FOREIGN KEY (Counselor) REFERENCES Teacher (Teacher_ID)
    //just double check this
    @ManyToOne(() => Teacher, teacher => teacher.Teacher_SAP_ID)
    @JoinColumn({ name: "counselor" })
    Counselor !: Promise<Teacher>; // FOREIGN KEY (counselor) REFERENCES Teacher (SAP_ID)


    @OneToMany(type => Grade , grade => grade.Student_USN)
    Grade_List !: Promise<Grade[]>;
    @OneToMany(type => Attendance , attendance => attendance.Student_USN)
    Attendance_List !: Promise<Attendance[]>;
    
    // @OneToMany(type => Enrolls , enrolls => enrolls.Student_USN)
    // Enrolls_List !: Enrolls[];
    @ManyToMany(type => Class_Group, class_group => class_group.Students)
    Class_Group_List !: Promise<Class_Group[]>;
    // @Column() // use @OneToOne() or @ManyToOne() or @OneToMany() ex:-@OneToMany(type => Project, project => project.student) projects: Project[]; 
    // Department_ID!: number;
    //PRIMARY KEY (USN),
    //FOREIGN KEY (Department_ID) REFERENCES Department (Department_ID)


// unique: true,
// nullable: true,

}
