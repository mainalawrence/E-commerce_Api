import  Express from "express";
import {getProducts,setProducts,searchProducts,deleteProducts,filterProducts,UpdateProducts} from '../Controller/Products/ProductsControllers'
const router=Express.Router();

router.get('/products',getProducts);

router.put('/products',UpdateProducts);

router.post('/products',setProducts);

router.post('/products',filterProducts);

router.post('/products',searchProducts);

router.delete('/products',deleteProducts);


export default router;
