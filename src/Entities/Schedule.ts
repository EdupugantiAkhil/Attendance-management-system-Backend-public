import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, Timestamp, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Class_Group } from "./Class_Group";
import { Attendance } from "./Attendance";
@Entity('Schedule')
export class Schedule extends BaseEntity {
        @PrimaryGeneratedColumn()
        Schedule_ID !: number;
        
        @Column({ name: "Class_Group_ID" })
        Class_Group_ID_val !: number;

        @ManyToOne(type => Class_Group, class_group => class_group.Class_Group_ID)
        @JoinColumn({ name: "Class_Group_ID" })
        Class_Group_ID !: Promise<Class_Group>;
        @Column()
        Start_Time !: Date //y is this also a primary key
        @Column()
        End_Time !: Date  //doublecheck this
        @Column()
        Description !: string

        @OneToMany(type => Attendance, attendance => attendance.Schedule_ID)
        Attendance !: Promise<Attendance>;
}



// export const Dynamic_Time_Table = new GraphQLObjectType({
//     name: 'Dynamic_Time_Table',
//     fields: () => ({
//         DTT_Class_Group_ID: {type: GraphQLID},
//         Start_Time : {type: GraphQLID}, //y is this also a primary key
//         End_Time: {type: GraphQLString},  
//         Descriptio: {type: GraphQLString},
//         // PRIMARY KEY (DTT_Class_Group_ID, Start_Time),
//         // FOREIGN KEY (DTT_Class_Group_ID) REFERENCES Class_Group(Class_Group_ID)
//     })
// })