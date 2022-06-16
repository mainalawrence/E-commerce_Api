import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
 
import { dbConnection } from "./Database/Connect";
import UsersRoute from "./Routes/UsersRoute";
import ProductsRoute from "./Routes/ProductsRoute";
import orderRoute from "./Routes/orderRoute";
import { upload } from "./Utility/ProductImageUpload";




dotenv.config();

const app =express();
//access controller
app.use(cors());
app.use(express.json());

//connect to database
dbConnection();

//Main routes
app.use("/api",UsersRoute);

app.use("/api",ProductsRoute);

app.use("/api",orderRoute);

 
app.post('/',upload.array('Users',4),(req,res)=>{
console.log(req.file);

  res.json(req.files)
})

const port=process.env.PORT||4000;

app.listen(port,()=>{

    console.log(`Server Listening at port ${port}`);
});