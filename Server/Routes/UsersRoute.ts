import  Express from "express";
import { getUsers ,setUser,updateUser,RemoveUser} from "../Controller/Users/UsersController";

const router=Express.Router();

router.get('/users',getUsers);

router.post('/users',setUser);

router.put('/users/:id',updateUser);

router.delete('/users/:id',RemoveUser);


export default router;
