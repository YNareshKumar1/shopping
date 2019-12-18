import { Component, OnInit } from '@angular/core';
import { KumarserService } from 'src/app/kumarser.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private nar:KumarserService) { }
  // addindex=[]
  cart=this.nar.cartlist
 
q:number=0
  ngOnInit() { 
    for (var val of this.cart) {
    this.q+=(val.quant*val.price)
  }

  }
  removeitem(i: number){
    this.cart.splice(i,1);
  }
  // subt=[]
  // total(a: number,b: number){
  //   const c=a*b
  //   this.subt.push(c)
  //   //this.subt+=c
  //   return c
  // }
  // sub=this.nar.subtotal()
}
