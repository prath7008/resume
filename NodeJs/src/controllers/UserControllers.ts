
import { getEnvironmentVariables } from '../environments/env';
import User from '../models/User';





export class UserController {

    static async signUp(req, res, next) {
        const name = req.body.name;
        const email = req.body.email;
        const jobprofile = req.body.jobprofile;
        const skills = req.body.skills;
        const address = req.body.address;
        const education = req.body.education;
        try {

            const data = {
                name: name,
                email: email,
                jobprofile: jobprofile,
                skills: skills,
                address: address,
                education: education,


                created_at: new Date(),
                updated_at: new Date()
            };
            let user = await new User(data).save();
            res.send(user);
        } catch (e) {
            next(e);
        }
    }

    static async getAllPosts(req, res, next) {



        try {

            User.find({})
                .then(data => {
                    res.send(data);
                })


        } catch (e) {
            next(e);
        }
    }
}    