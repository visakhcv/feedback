import { Router } from 'express';
import { userController } from '../app/controllers/user.controller';


const userRouter = Router();
const usercontroller = new userController();




userRouter.post('/add',usercontroller.postUserFeedback);
userRouter.get('/getAll',usercontroller.getAllFeedbacks);
userRouter.get('/get/:userEmail',usercontroller.getUserFeedback);


export default userRouter;
