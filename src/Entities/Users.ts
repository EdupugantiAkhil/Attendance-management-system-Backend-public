import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('Users')
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    User_ID  !: number;

    @Column ()
    First_Name !: string; // Not Null
    @Column({nullable: true,})
    Middle_Name !: string; // Nullable
    @Column()
    Last_Name !: string; // Not Null
    @Column()
    Address !: string; // Not Null
    @Column()
    College_Email  !: string; // Not Null
    @Column({nullable: true,})
    Personal_Email !: string; // Nullable
    @Column()
    Mobile_Number !: string; // Not Null //bigint

}
