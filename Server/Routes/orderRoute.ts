import  Express from "express";
import {getOrders,setOrders,searchOrders,deleteOrders,filterOrders,UpdateOrders} from '../Controller/Orders/orderController'

const router=Express.Router();

router.get('/Orders',getOrders);

router.put('/Orders',UpdateOrders);

router.post('/Orders',setOrders);

router.post('/Orders',filterOrders);

router.post('/Orders',searchOrders);

router.delete('/Orders',deleteOrders);


export default router;