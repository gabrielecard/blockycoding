import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ChartsAllComponent } from '../charts-all/charts-all.component';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  public show:boolean;
  constructor(private userService: UserService,  private chartsComponents: ChartsAllComponent) { }

  ngOnInit() {
    this.show = false;
  }

  showLevelErrorsAll(module: number) {
    this.userService.getModulesErrors(module);
  }
  
  showLevelTimeAll(module: number) {
    this.userService.getModulesTime(module);
  }

  toggle() {
    this.show = true;
    this.chartsComponents.ngAfterViewInit();
  }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
    
}

}
