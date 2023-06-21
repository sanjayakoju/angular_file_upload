import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {ApiEndPoints} from "../../core/constant/api-url-constant";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = ApiEndPoints.API_URL

  constructor(private http: HttpClient) { }

  public saveUser(user: any): Observable<any> {
    return this.http.post<any>(ApiEndPoints.USERS.SAVE, user);
  }

  public login(loginCredential : any): Observable<any> {
    const params = new HttpParams()
      .set('username', loginCredential.username)
      .set('password', loginCredential.password)
    return this.http.post(ApiEndPoints.AUTH.LOGIN, params);
  }


}
