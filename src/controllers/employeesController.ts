import employees from '../models/employeesModel'
import {Request,Response } from 'express'
import conn from '../index'

export const createEmployees = async function(req:Request,res:Response) {

let {employeeId,name,city,salary,updatedAt,createdAt} : {employeeId:number,name:string,city:string,salary:number,updatedAt:string,createdAt:string} = req.body;
let sqlQuery = "INSERT INTO employees SET ?"
let query = conn.query(sqlQuery, req.body,(err, results) => {
if(err) throw err;
res.status(201).send({status:true,message:results})
});
}

export const getEmployees = async function(req:Request,res:Response) {
let {id} :{id:number} = req.body;
let sqlQuery = "SELECT * FROM employees WHERE employeeId=" + id;
let query = conn.query(sqlQuery, req.body,(err, results) => {
if(err) throw err;
res.status(201).send({status:true,message:results})
});
}

export const deleteEmployees = async function(req:Request,res:Response) {
let {id} :{id:number} = req.body;
let sqlQuery = "DELETE FROM employees WHERE employeeId="+id+"";
let query = conn.query(sqlQuery, req.body,(err, results) => {
if(err) throw err;
res.status(201).send({status:true,message:results})
});
}

export const updateEmployees = async function(req:Request,res:Response) {
let {employeeId,name,city,salary,updatedAt,createdAt} : {employeeId:number,name:string,city:string,salary:number,updatedAt:string,createdAt:string} = req.body;
let sqlQuery ="UPDATE employees SET employeeId='"+employeeId+"',name='"+name+"',city='"+city+"',salary='"+salary+"',updatedAt='"+updatedAt+"',createdAt='"+updatedAt+"' WHERE employeeId="+employeeId
let query = conn.query(sqlQuery, req.body,(err, results) => {
if(err) throw err;
res.status(201).send({status:true,message:results})
});
}

module.exports = {createEmployees,getEmployees,deleteEmployees,updateEmployees}