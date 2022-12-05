import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  message:string="";
  loginForm!:FormGroup;
  tabadmin$!:Observable<Admin[]>;

  constructor(private auth: AuthentificationService , private fb : FormBuilder  , private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  //  this.tabadmin$=this.auth. getAdmin();
  }
  
  onSubmit(){
    this.auth.login(this.loginForm.value['username'] ,this.loginForm.value ['password']).subscribe(
      Admin=>{
        if (Admin.length==0){
          alert("echec");
          this.loginForm.reset();
        }
        else 
        this.router.navigate(['admin/dashboard']);
      }
    )
} 

}
