import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public show:boolean;
  constructor(private userService: UserService, private chartsComponents: ChartsComponent) { }

  ngOnInit() {
    this.show = false;
    this.userService.getUserList();
  }

  showLevelsCompleted(login: string, module: number) {
    this.userService.getLevelsCompleted(login, module);
  }
  
  showHours(login: string, module: number) {
    this.userService.getHours(login, module);
  }

  showLevelErrors(login: string, module: number) {
    this.userService.getErrorLevel(login, module);
  }

  showLevelTime(login: string, module: number) {
    this.userService.getTimeLevel(login, module);
  }

  toggle() {
    this.chartsComponents.ngAfterViewInit();
    this.show = true;
  }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
    
}
}
