import { Router } from 'express';
import { UserController } from '../controllers/UserControllers';
import { GlobalMiddleWare } from '../middlewares/GlobalMiddleware';

import { UserValidators } from '../validators/UserValidators';



class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes() {


        this.router.get('/users', UserController.getAllPosts)
    }

    postRoutes() {
        this.router.post('/signup', UserValidators.signUp(), GlobalMiddleWare.checkError, UserController.signUp);

    }
    patchRoutes() {

    }
    deleteRoutes() {

    }
}

export default new UserRouter().router;