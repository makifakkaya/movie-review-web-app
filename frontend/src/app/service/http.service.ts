import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {
    }

    setApi(api: string, endpoint: string) {
        return api + endpoint;
    }

    get<T>(api: string, endpoint: string, callBack: (res: HttpEvent<T>) => void, options: any = {}) {
        let apiUrl = this.setApi(api, endpoint);
        this._http.get<T>(apiUrl, options).subscribe({
            next: (res) => callBack(res),
        })
    }

    post<T>(api: string, endpoint: string, model: any, callBack: (res: HttpEvent<T>) => void, options: any = {}) {
        let apiUrl = this.setApi(api, endpoint);

        this._http.post<T>(apiUrl, model, options).subscribe({
            next: (res) => callBack(res),
        })
    }

    put<T>(api: string, endpoint: string, model: any, callBack: (res: HttpEvent<T>) => void, options: any = {}) {
        let apiUrl = this.setApi(api, endpoint);

        this._http.put<T>(apiUrl, model, options).subscribe({
            next: (res) => callBack(res),
        })
    }

    delete<T>(api: string, endpoint: string, callBack: (res: HttpEvent<T>) => void, options: any = {}) {
        let apiUrl = this.setApi(api, endpoint);

        this._http.delete<T>(apiUrl, options).subscribe({
            next: (res) => callBack(res),
        })
    }
}
