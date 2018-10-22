import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-levels-completed',
  templateUrl: './levels-completed.component.html',
  styleUrls: ['./levels-completed.component.css']
})
export class LevelsCompletedComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
