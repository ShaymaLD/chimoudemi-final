import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
;

import { Marque } from '../marque';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 
  productList !:Marque[] ;
  public filterMarque!: Marque[];
  constructor(private router:Router,private api:ApiService,private  activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterMarque = res;
      // this.productList.forEach((a:any) => {
      //   if(a.category ==="women's clothing" || a.category ==="men's clothing"){
      //     a.category ="fashion"
      //   }
      //   Object.assign(a,{quantity:1,total:a.price});
      // });
      console.log(this.productList)
    });
   
  }
  filter(marque:string){
    this.filterMarque = this.productList
    .filter((a:any)=>{
      if(a.marque == marque || marque==''){
        return a;
      }
    })
  }

}
