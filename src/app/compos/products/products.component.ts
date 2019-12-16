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
  ngOnInit() {
 
  }
  disc(p: number,d: number){
    const r= (p*(100-d))/100
    //this.serv.shoplist.dprice=r
    return r
  }
  addtocart(t: any){
    this.serv.indexvals.push(t)
  }
}
