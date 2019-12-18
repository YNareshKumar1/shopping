import { Component, OnInit } from '@angular/core';
import { KumarserService } from 'src/app/kumarser.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private serv:KumarserService) { }
  productsli=this.serv.shoplist
  // ngOnInit() {
 
  // }
  ngOnInit() {
   
  }
  // k=0
  disc(p: number,d: number){
    const dp= (p*(100-d))/100
    // this.serv.shoplist.dprice[this.k]=dp
    // this.k++;
    return dp
  }
// pri=this.serv.shoplist.dprice
  addtocart(t: any){
    this.serv.cartlist.push(t)
  }

}
