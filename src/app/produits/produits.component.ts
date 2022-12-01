import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../marque';
import {  ProduitVoitureService } from '../service/produitVoiture.service';
import { rechercherCarService } from '../service/rechercherCar.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 
  productList !:Marque[] ;
  public filterMarque!: Marque[];
  searchKey!:string;
  constructor(private router:Router,private prod:ProduitVoitureService,private  rechercher:rechercherCarService,private  activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.prod.getProduct()
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
    this.rechercher.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
   
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
