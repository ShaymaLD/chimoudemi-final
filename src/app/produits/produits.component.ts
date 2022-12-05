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
  public searchTerm !: string;
  totalItem!:number;
  productList !:Marque[] ;
  public filterMarque!: Marque[];
  searchKey!:string;
  constructor(private router:Router,private prod:ProduitVoitureService,private  rechercher:rechercherCarService,private  activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.prod.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterMarque = res;
     





      console.log(this.productList)
    });
    this.rechercher.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
   
    this.rechercher.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
   
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.rechercher.search.next(this.searchTerm);
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
