import { Injectable } from '@angular/core';
import { apiConstants } from "../constant/apiConstant";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppSettings } from '../config/config';
import { map } from "rxjs/operators";


@Injectable({
    providedIn: 'root', // or provide it in a specific module
})
export class loginService {
    private url = AppSettings.API_ENDPOINT;
    private verifyLoginApi = apiConstants.example;
    constructor(private http: HttpClient) {
        // Initialize headers here or directly where it's declared
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
    headers: HttpHeaders;
    VerifyLogin(body: any) {
        console.log("coming xyz")
        return this.http
            .post(`${this.url}${this.verifyLoginApi}`, body, {
                headers: this.headers,
            })
            .pipe(map((res) => res));
    }

}
