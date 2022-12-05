import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NouveauV } from '../nouveau-v';
const URL =" http://localhost:4200/Nouveau";
@Injectable({
  providedIn: 'root'
})
export class NouveauVoitureService {

  constructor(private http: HttpClient) { }
  getCar(id :number):Observable<NouveauV> {
    return  this.http.get<NouveauV>(URL + '/'+ id);
   }
}
