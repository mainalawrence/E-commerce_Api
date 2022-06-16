import  Express from "express";
import {getProducts,setProducts,searchProducts,deleteProducts,filterProducts,UpdateProducts} from '../Controller/Products/ProductsControllers'
import { upload } from "../Utility/ProductImageUpload";
const router=Express.Router();

router.get('/products',getProducts);

router.put('/products',upload.array('Product',4),UpdateProducts);

router.post('/products',upload.array('Product',4),setProducts);

router.post('/products',filterProducts);

router.post('/products/:name',searchProducts);

router.delete('/products',deleteProducts);


export default router;
