import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../../shared/user.service';
import { Login } from '../../shared/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login: Login;
  flag: boolean;
  constructor(private userService : UserService, private toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.login = {
      login: '',
      password: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.loginUser(form.value)
      .subscribe((data: any) => {
        if (data == 2) {
          this.toastr.success('Login efetuado com sucesso!');
          this.router.navigate(['/home']);
          this.flag = true;

        }
        else
          this.resetForm(form);
          if (this.flag != true)
            this.toastr.error('Usuário ou senha incorretos!');
      });
  }

}