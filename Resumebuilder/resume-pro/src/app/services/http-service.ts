import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';



@Injectable()
export class HttpService {

    private baseURL = 'http://localhost:5000/api';

    constructor(private httpClient: HttpClient) {

    }

    get(url: string, paramData?: any): Observable<any> {
        const data = { params: paramData };

        return this.httpClient.get(this.baseURL + url, data);
    }

    post(url: string, body: any): Observable<any> {
        return this.httpClient.post(this.baseURL + url, body);

    }

}   