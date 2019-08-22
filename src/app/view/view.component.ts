import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
projects:[{}];
  constructor() { 
    this.projects=[{name:"p1",duration:"30 days",enddate:"22/08/2019"}];
  }

  ngOnInit() {
  }

  public Add(){
    let data={name:"p2",duration:"20 days",enddate:"25/08/2019"}
    this.projects.push(data);
    }
}
