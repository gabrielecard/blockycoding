import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  login: Login;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.login = this.userService.getUser();
  }

}
