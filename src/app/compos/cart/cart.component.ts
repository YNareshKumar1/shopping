import { Component, OnInit } from '@angular/core';
import { KumarserService } from 'src/app/kumarser.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private nar:KumarserService) { }
  naray=[]
  a=this.nar.shoplist
  b=this.nar.indexvals
  ngOnInit() {
    for(let i=0;i<this.b.length;i++){
      this.naray.push(this.a[this.b[i]])
    }
  }
  subt=0
  total(a: number,b: number){
    const c=a*b
    //this.subt+=c
    return c
  }

}
