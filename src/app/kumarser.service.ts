import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KumarserService {

cartlist=[]
img1="/assets/pic1.webp"
img2="/assets/pic2.webp"
img3="/assets/pic3.webp"
img4="/assets/pic4.webp"
img5="/assets/pic5.webp"
img6="/assets/pic6.webp"
img7="/assets/pic7.webp"
img8="/assets/pic8.webp"
img9="/assets/pic9.webp"
img10="/assets/pic10.webp"
img11="/assets/pic11.webp"
img12="/assets/pic12.webp"
shoplist=[{name:"Raymond Men's Shirt",price:1500,discount:20,image:this.img1,dprice:0,quant:+1},
{name:"Dennis Lingo Men's Shirt",price:2500,discount:60,image:this.img2,dprice:0,quant:+1},
{name:"Jack & Jones Men's Shirt",price:1599,discount:40,image:this.img3,dprice:0,quant:+1},
{name:"Highlander Men's Shirt",price:2100,discount:35,image:this.img4,dprice:0,quant:+1},
{name:"Zombom Men's Shirt",price:2900,discount:50,image:this.img5,dprice:0,quant:+1},
{name:"Arrow New York Men's Shirt",price:1500,discount:30,image:this.img6,dprice:0,quant:+1},
{name:"Billion Men's Shirt",price:1990,discount:25,image:this.img7,dprice:0,quant:+1},
{name:"Van Heusen Men's Shirt",price:1700,discount:20,image:this.img8,dprice:0,quant:+1},
{name:"Flying Machine Men's Shirt",price:1690,discount:9,image:this.img9,dprice:0,quant:+1},
{name:"U.S. Polo Assn Men's Shirt",price:1200,discount:5,image:this.img10,dprice:0,quant:+1},
{name:"Wrangler Men's Shirt",price:1100,discount:15,image:this.img11,dprice:0,quant:+1},
{name:"Indian Terrain Men's Shirt",price:1300,discount:10,image:this.img12,dprice:0,quant:+1}]
}
