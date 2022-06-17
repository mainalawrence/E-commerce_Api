 import  {Request,RequestHandler,Response}  from "express"
import sql from 'mssql'
import sqlConfig from "../../Database/configaration";
import bycrypt from 'bcrypt'
import { uid } from 'uid';
 
 export const getUsers:RequestHandler =async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .execute('getUsers');
        return res.json(result.recordsets);
     } catch (error) {
         return res.json({message:"Internal Error",error})
     }

 }
 export const setUser:RequestHandler =async (req:Request,res:Response)=>{
        const{id,firstName,lastName,email,password}=req.body 
        let image:string='';   
    try {
        let encpassword= await bycrypt.hash(password,10);
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id', sql.VarChar,uid(32))
        .input( 'firstName', sql.VarChar,firstName)
        .input("lastName",sql.VarChar,lastName)
        .input('email', sql.VarChar,email)
        .input('password', sql.VarChar,encpassword)
        .input('image', sql.VarChar,image)
        .execute('createUser');
        res.json(result);
    } catch (error) {
          return res.json({message:"Internal Error",error})

    }  

 }
 export const updateUser:RequestHandler =async (req:Request,res:Response)=>{
           const{id,firstName,lastName,email,password}=req.body 
        let image:string='';   
    try {
        let encpassword= await bycrypt.hash(password,10);
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id', sql.VarChar,req.params.id)
        .input( 'firstName', sql.VarChar,firstName)
        .input("lastName",sql.VarChar,lastName)
        .input('email', sql.VarChar,email)
        .input('password', sql.VarChar,encpassword)
        .input('image', sql.VarChar,image)
        .execute('updateUser');

        return res.json(result)
        
    } catch (error) {
          return res.json({message:"Internal Error",error})  
    } 

 }
export const RemoveUser:RequestHandler =async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id',sql.VarChar,req.params.id)
        .execute('deleteUser')
           if(result.rowsAffected[0]>0){
            res.json({message:'User Deleted Successfully',result});
        }
        else{
            res.json({message:'Invalid User'})
        }
     } catch (error) {
           return res.json({message:"Internal Error",error})
     }

 }


