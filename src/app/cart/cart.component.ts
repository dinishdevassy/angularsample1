import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products=[];
cart=[];
cartview:Boolean=false;
  constructor() {
    this.products=[
        {name:"printer",price:"8000",company:"HP"},
        {name:"scanner",price:"12000",company:"HP"},
        {name:"keyboard",price:"1800",company:"HP"}
      ]
   }

  ngOnInit() {
  }
public Addcart(i){
this.cartview=true;
let data=this.products[i];
this.cart.push(data);
}
public Removefromcart(j){
 
 this.cart.splice(j,1);
 if(this.cart.length==0)
 this.cartview=false;

}
}
