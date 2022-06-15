import Express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
 
import { dbConnection } from "./Database/Connect";
import UsersRoute from "./Routes/UsersRoute";
import ProductsRoute from "./Routes/ProductsRoute";
import orderRoute from "./Routes/orderRoute";



dotenv.config();

const app =Express();

app.use(Express.json());

//access controller
app.use(cors());

//connect to database
dbConnection();

//Main routes
app.use("/api",UsersRoute);

app.use("/api",ProductsRoute);

app.use("/api",orderRoute);


const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`Server Listening at port ${port}`);
});