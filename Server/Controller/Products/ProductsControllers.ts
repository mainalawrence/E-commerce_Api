 import  {Request,RequestHandler,Response}  from "express"
import { imagetoUrl } from "../../Utility/FileImagetoUrl"

import sqlConfig from "../../Database/configaration"
import { uid } from 'uid';
import sql, { MAX } from 'mssql'


 export const getProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .execute('getProducts');

        if(result.rowsAffected[0]<0){
            res.json({message:"No users",result})
        }
        res.json(result.recordsets);

     } catch (error ){
           return res.json({message:"Internal Error",error})
     }

 }

 interface File_{ 
 // fieldname:string
	// originalname:string
	// encoding: string
	// mimetype: string
	// destination:string
	// filename:string
	// path:string
	// size:number
 }

  export const setProducts=async (req:Request, res:Response)=>{

    const {name,price,brand,images ,category ,description,features,specification } =JSON.parse(req.body.data);    
     try {
       const pool =await sql.connect(sqlConfig);
       const result=await pool.request()

        .input('id' ,sql.VarChar(100),uid(32))
        .input('name' ,sql.VarChar(100),name)
        .input('price' ,sql.Float,price)
        .input('brand' ,sql.VarChar(100),brand)
        .input('images' ,sql.NVarChar(MAX),images)
        .input('category' ,sql.VarChar(100),category)
        .input('description', sql.VarChar(100),description)
        .input('features', sql.NVarChar(MAX),features)
        .input('specification' ,sql.NVarChar(MAX),specification)
        .execute('createProduct');

        if(result.rowsAffected[0]>0){
            res.json({message:"product created successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }

        const files= req.files as {[filename: string]: Express.Multer.File[]}
      //  res.json(files[0].filename;
         
     } catch (error:any){
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const UpdateProducts:RequestHandler=async (req:Request,res:Response)=>{
    const {name,price,brand,images ,category ,description,features,specification } =JSON.parse(req.body.data);   

     try {
        const pool =await sql.connect(sqlConfig);
       const result=await pool.request()
        .input('id' ,sql.VarChar,req.params.id)
        .input('name' ,sql.VarChar(100),name)
        .input('price' ,sql.Float,price)
        .input('brand' ,sql.VarChar(100),brand)
        .input('images' ,sql.NVarChar(MAX),images)
        .input('category' ,sql.VarChar(100),category)
        .input('description', sql.VarChar(100),description)
        .input('features', sql.NVarChar(MAX),features)
        .input('specification' ,sql.NVarChar(MAX),specification)
        .execute('updateProduct');


        if(result.rowsAffected[0]>0){
            res.json({message:"Product created successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
     } catch (error) {
        return res.json({message:"Internal Error",error} ) 
     }

 }
  export const deleteProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id' ,sql.VarChar,req.params.id)
        .execute('deleteProduct');
          if(result.rowsAffected[0]>0){
            res.json({message:"Product created successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
     } catch (error ){
          return res.json({message:"Internal Error",error})
         
     }

 }
  export const filterProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error ){
          return res.json({message:"Internal Error",error})
     }

 }
  export const searchProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('name' ,sql.VarChar,req.params.search)
        .execute('SearchProducts');
          if(result.rowsAffected[0]>0){
            res.json({message:"Product Search was successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
        
     } catch (error) {
          return res.json({message:"Internal Error",error})
     }

 }