import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marque } from '../marque';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css']
})
export class SelectedproduitComponent implements OnInit {
idProduit!:number;

voiture !:Marque;
  constructor(private activetedRoute:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
this.idProduit=this.activetedRoute.snapshot.params['id'];
this.api.getVoitureByid(this.idProduit).subscribe((data)=>(this.voiture=data));
  }

}
