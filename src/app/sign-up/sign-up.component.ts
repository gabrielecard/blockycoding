import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  id_type:number
  levels:Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
];

  constructor(private userService: UserService, private toastr: ToastrService) { }

  toNumber(){
    this.id_type = +this.id_type;
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      login: '',
      password: '',
      id_type: 1
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
