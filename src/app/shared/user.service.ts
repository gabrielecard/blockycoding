import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Login } from './login.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ChartsComponent } from '../charts/charts.component';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly rootUrl = 'https://blockycoding.azurewebsites.net';
  userList : string[];
  levelsCompleted : number;
  hour : string;
  module: number;
  modulesErrors: any;
  modulesTime: any;
  timeLevel : any;
  errorLevel : any;
  usr: string;
  private login: Login;
  chartT: ChartsComponent;
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      login: user.login,
      password: user.password,
      id_type: user.id_type
    }
    return this.http.post(this.rootUrl + '/api/user', body);
  }

  loginUser(login : Login){
    const bodyLogin: Login = {
      login: login.login,
      password: login.password
    }

    this.login = bodyLogin;
    return this.http.post(this.rootUrl + '/api/loginWeb', bodyLogin);
  }

  getUser(): Login {
    return this.login;
  }

  getUserList(){
    this.http.get(this.rootUrl + '/api/getStudents')
    .map((data: any) => data)
    .subscribe(
            (data: any) => {
                this.userList = data;
            })
  }

  getLevelsCompleted(login: string, module: number){
    const body: any = {
      login: login,
      id_module: module
    }
    this.usr = login;
    this.module = module;
    return this.http.post(this.rootUrl + '/api/levelsCompleted', body)
    .map((data: any) => data)
    .subscribe(
            (data: any) => {
                this.levelsCompleted = data;
            })
  }
  
  getHours(login: string, module: number){
    const body: any = {
      login: login,
      id_module: module
    }
    return this.http.post(this.rootUrl + '/api/hour', body)
    .map((data: any) => data)
    .subscribe(
            (data: any) => {
                this.hour = data;
            })
  }

  getErrorLevel(login: string, module: number){
    const body: any = {
      login: login,
      id_module: module
    }
    this.errorLevel = this.http.post(this.rootUrl + '/api/errorLevel', body)
    .map(data => data);
  }

  getTimeLevel(login: string, module: number){
    const body: any = {
      login: login,
      id_module: module
    }
    this.timeLevel = this.http.post(this.rootUrl + '/api/timeLevel', body)
    .map((data: any) => data);
  }

  getModulesErrors(module: number){
    const body: any = {
      id_module: module
    }
    this.modulesErrors = this.http.post(this.rootUrl + '/api/errorLevelAll', body)
    .map((data: any) => data);
  }

  getModulesTime(module: number){
    const body: any = {
      id_module: module
    }
    this.modulesTime = this.http.post(this.rootUrl + '/api/timeLevelAll', body)
    .map((data: any) => data);
  }
}