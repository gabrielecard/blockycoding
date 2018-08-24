import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      login: '',
      password: '',
      id_type: NaN
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('Usuário cadastrado com sucesso!');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

}