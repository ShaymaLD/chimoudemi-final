import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Client';
const URL='http://localhost:4000/References';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  
  addReferences(ref:Client):Observable<Client>{
    return this.http.post<Client>(URL,ref);
}
}