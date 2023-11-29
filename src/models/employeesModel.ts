import { RowDataPacket } from "mysql2"

export default interface employees extends RowDataPacket {
  employeeId: number;
  name: string;
  city: string;
  salary:number;
  updatedAt?:string;
  createdAt?:string;
}