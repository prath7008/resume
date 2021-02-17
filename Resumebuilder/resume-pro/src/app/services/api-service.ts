import { Injectable } from "@angular/core";


import { HttpService } from "./http-service";
import { User } from '../models/user';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


// const AUTH_TOKEN= 'auth token';
@Injectable()
export class ApiService {

    constructor(private httpService: HttpService) {

    }

    getAllPost(): Observable<User[]> {
        return this.httpService.get('/res/users')
            .pipe(map(data => data as User[]));
    }

    signUp(data: {
        name: string,
        email: string,
        jobprofile: string,
        skills: string,
        address: string,
        education: string,
    }) {
        return this.httpService.post('/res/signup',
            data)
    }
}