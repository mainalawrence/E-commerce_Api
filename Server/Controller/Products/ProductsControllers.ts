 import  {Request,RequestHandler,Response}  from "express"
import { imagetoUrl } from "../../Utility/FileImagetoUrl"
import fs from 'fs'
import { string } from "joi"

 export const getProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         return res.send(imagetoUrl(fs.realpathSync('Images/Product/images-1655304346990-767892495')))
     } catch (error) {
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
     try {
        // const myfoles=req.files[0];

        const files= req.files as {[filename: string]: Express.Multer.File[]}
        res.json(files[0].filename);
         
     } catch (error) {
         return res.json({message:"Internal Error",error})
     }

 }
  export const UpdateProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error) {
        return res.json({message:"Internal Error",error})  
     }

 }
  export const deleteProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error) {
          return res.json({message:"Internal Error",error})
         
     }

 }
  export const filterProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error) {
          return res.json({message:"Internal Error",error})
     }

 }
  export const searchProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error) {
          return res.json({message:"Internal Error",error})
     }

 }