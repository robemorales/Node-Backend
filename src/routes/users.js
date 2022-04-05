import {Router} from 'express';
import { getUser, getUserCount, getUsers, saveUser, deleteUser, updateUser} from '../controllers/users'
 const router = Router();

 /**
 * swagger
 * /users:
 * get:
 * summary: holla
 */
 router.get('/users', getUsers)

 router.get('/users/count', getUserCount)

 router.get('/users/:id', getUser)

 router.post('/users', saveUser)

 router.delete('/users/:id', deleteUser)

 router.put('/users/:id', updateUser)


 export default router