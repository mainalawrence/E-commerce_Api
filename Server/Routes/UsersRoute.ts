import  Express from "express";
import verifyToken from "../Authentication/Auth";
import { getUsers ,setUser,updateUser,RemoveUser} from "../Controller/Users/UsersController";

const router=Express.Router();

router.get('/users',verifyToken(),getUsers);

router.post('/users',verifyToken(),setUser);

router.put('/users/:id',verifyToken(),updateUser);

router.delete('/users/:id',verifyToken(),RemoveUser);


export default router;
