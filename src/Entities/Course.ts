import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, OneToMany ,JoinColumn} from "typeorm";
import { Class_Group } from "./Class_Group";
import { Department } from "./Department";
@Entity('Course')
export class Course extends BaseEntity {
    @PrimaryColumn()
    Course_Code!: string; // PRIMARY KEY (Course_Code),
    @Column()
    Course_Name!: string; // Not Null
    @Column()
    Credits!: number; // Not Null
    // @Column()


    //why do i have to go to departments form cources so i am removing this
    @ManyToOne(() => Department, department => department.Department_ID, {onDelete: 'SET NULL'})
    @JoinColumn({ name: "Course_Dept_ID" })
    Course_Dept_ID!: Promise<Department>; // FOREIGN KEY (Department_ID) REFERENCES Department (Department_ID)
    // Course_Dept_ID!: number; // Not Null

    // @Column()
    // Course_Dept_ID!: number; // Not Null

    //the typeORM only stuff
    @OneToMany(type => Class_Group , class_group => class_group.Course_Code)
    Class_Groups!: Promise<Class_Group[]>;
    

    //one to many relationship
    // @OneToMany(type => Class_Group, class_group => class_group.Course_Code)



    // @Column()
    // Course_Description!: string; // Not Null
    // @Column()
    // Course_Credits!: number; // Not Null
    // @Column()
    // Course_Type!: string; // Not Null
    // @Column()
    // Course_Prerequisite!: string; // Not Null
    // @Column()
    // Course_Co_Requisite!: string; // Not Null
    // @Column()
    // Course_Department_ID!: number; // FOREIGN KEY (Course_Department_ID) REFERENCES Department (Department_ID)
    // PRIMARY KEY (Course_Code),
    // FOREIGN KEY (Course_Department_ID) REFERENCES Department (Department_ID)
}


// export const CourseType = new GraphQLObjectType({
//     name: 'Course',
//     fields: () => ({
//         Course_Code: {type: GraphQLID},
//         Course_Name: {type: GraphQLString},
//         Credits: {type: GraphQLInt},
//         Course_Dept_ID: {type: GraphQLID},
//         // FOREIGN KEY (Course_Dept_ID) REFERENCES Department (Department_ID)   
//     })
// })