import { Component, OnInit } from '@angular/core';
import { KumarserService } from '../kumarser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private kumar:KumarserService) { }
  l=this.kumar.len
  
  ngOnInit() {
  }

}
