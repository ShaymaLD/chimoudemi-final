import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Client';
const URL='http://localhost:3000/References';
@Injectable({
  providedIn: 'root'
})
export class AjouterService {

  constructor(private http:HttpClient) { }

  
  addReferences(ref:Client):Observable<Client>{
    return this.http.post<Client>(URL,ref);
}
}