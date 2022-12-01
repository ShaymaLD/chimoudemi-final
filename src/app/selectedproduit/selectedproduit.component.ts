import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marque } from '../marque';
import {  ProduitVoitureService } from '../service/produitVoiture.service';

@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css']
})
export class SelectedproduitComponent implements OnInit {
idProduit!:number;

voiture !:Marque;
  constructor(private activetedRoute:ActivatedRoute,private prod:ProduitVoitureService) { }

  ngOnInit(): void {
this.idProduit=this.activetedRoute.snapshot.params['id'];
this.prod.getVoitureByid(this.idProduit).subscribe((data)=>(this.voiture=data));
  }

}
