import { Component, OnInit } from '@angular/core';
import { rechercherCarService } from '../service/rechercherCar.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public searchTerm !: string;
  totalItem!:number;
  constructor(private rechercher: rechercherCarService) { }

  ngOnInit(): void {
    this.rechercher.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.rechercher.search.next(this.searchTerm);
  }


}
