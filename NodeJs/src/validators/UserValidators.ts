import { body, query } from 'express-validator';
import User from '../models/User';

export class UserValidators {
    static signUp() {

        return [
            body('name', 'Name is Required').isString(),
            body('email', 'Email is Required').isEmail(),
            body('jobprofile', 'JobProfile is Required').isString(),
            body('skills', 'Skills is Required').isString(),
            body('address', 'Address is Required').isString(),
            body('education', 'Education Details  is Required').isString(),


        ];
    }
}