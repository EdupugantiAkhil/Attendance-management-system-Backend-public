import {getConnection} from "typeorm";
import { Attendance } from "../../Entities/Attendance";
import { Users } from "../../Entities/Users";


export  const runCustomQuery = async () => {
    const connection = getConnection();
    // const repo = connection.getRepository(Users)

    // const user = await repo.findOne();
    // console.log(user);
    const repo = connection.getRepository(Attendance);
    const att = await repo.findOne();
    console.log(att);
    console.log(await att?.Student_USN);
}
