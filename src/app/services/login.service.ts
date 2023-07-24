import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUri: string;

  constructor(private http: HttpClient) {
    this.loginUri = environment.urlApi + environment.basePath + '/login';
  }

  login(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('Content-Type', 'application/json')
      .set('username', username)
      .set('password', password);

    return this.http.post(this.loginUri, null, {params, observe: 'response'})
  }
}
