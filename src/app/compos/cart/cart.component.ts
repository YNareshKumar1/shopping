import { Component, OnInit } from '@angular/core';
import { KumarserService } from 'src/app/kumarser.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private nar:KumarserService) { }
  addindex=[]
  a=this.nar.shoplist
  b=this.nar.addindexvals
  st=0
  ngOnInit() {
    for(let i=0;i<this.b.length;i++){
      this.addindex.push(this.a[this.b[i]])
    }
    this.nar.ilength=this.addindex.length;
  }
  subt=[]
  total(a: number,b: number){
    const c=a*b
    this.subt.push(c)
    //this.subt+=c
    return c
  }
  sub=this.nar.subtotal()
}
