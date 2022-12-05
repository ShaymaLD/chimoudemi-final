import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
const URL='http://localhost:3200/Admin';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  constructor(private http :HttpClient) { }
  login(login:string , pwd :string ):Observable<Admin[]>{
    return this.http.get<Admin[]>(URL+"?username="+login+"&password="+pwd) ;}
 
}
