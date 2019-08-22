import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  num1;
  num2;
  result:Number;
  view:Boolean=true;
  constructor() { }

  ngOnInit() {
  }
public add(){
  this.view=true;
  this.result=parseInt(this.num1) + parseInt(this.num2);
}
public subtract(){
  this.view=true;
  this.result=parseInt(this.num1) - parseInt(this.num2);
}
}
