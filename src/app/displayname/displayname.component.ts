import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrls: ['./displayname.component.css']
})
export class DisplaynameComponent implements OnInit {
  view:Boolean=false;
  cust_name:String;
  constructor() { }

  ngOnInit() {
  }
public display(){
  this.view=true;
}
}
