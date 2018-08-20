import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import './rxjs/add/operator/map';*/
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://webapiazuretcc.azurewebsites.net';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      login: user.login,
      password: user.password,
      id_type: user.id_type
    }
    return this.http.post(this.rootUrl + '/api/user', body);
  }

}