import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, Timestamp, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Class_Group } from "./Class_Group";


@Entity('Time_Table')
export class Time_Table extends BaseEntity {
    @PrimaryColumn()
    @ManyToOne(type => Class_Group, class_group => class_group.Class_Group_ID)
    @JoinColumn({ name: "Class_Group_ID" })
    Class_Group_ID  !: number;
    @PrimaryColumn()
    Day !: number;
    @PrimaryColumn('time', {name: 'Start_Time'})
    Start_Time !: Date;
    @Column('time', {name: 'End_Time'})
    End_Time !: Date;   
}

// export const Generator_Time_Table = new GraphQLObjectType({
//     name: 'Generator_Time_Table',
//     fields: () => ({
//         GTT_Class_Group_ID: {type: GraphQLID},
//         Day : {type: GraphQLID},
//         Start_Time : {type: GraphQLID},
//         End_Time: {type: GraphQLString},     
//         // PRIMARY KEY (GTT_Class_Group_ID, Start_Time, Day),
//         // FOREIGN KEY (GTT_Class_Group_ID) REFERENCES Class_Group (Class_Group_ID)
//     })
// })