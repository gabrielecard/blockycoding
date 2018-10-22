import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  login: Login;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.login = this.userService.getUser();
  }

}
