import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NouveauV } from '../nouveau-v';
import { NouveauVoitureService } from '../service/nouveau-voiture.service';

@Component({
  selector: 'app-nouveau-voiture',
  templateUrl: './nouveau-voiture.component.html',
  styleUrls: ['./nouveau-voiture.component.css']
})
export class NouveauVoitureComponent implements OnInit {
  idcar!:number;

Car !:NouveauV;

  constructor(private activetedRoute:ActivatedRoute,private voiture:NouveauVoitureService) { }

  ngOnInit(): void {
    this.idcar=this.activetedRoute.snapshot.params['id'];
this.voiture.getCar(this.idcar).subscribe((data)=>(this.Car=data));
  }

}
