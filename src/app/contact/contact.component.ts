import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../Client';

import { ClientService } from '../service/Client.Service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  FormG!:FormGroup;
  lesReferences!:Client[];
  constructor( private fb:FormBuilder,private clientServise:ClientService ) { }

  ngOnInit(): void {
    this.FormG=this.fb. nonNullable.group({
      nom:['',[Validators.required,Validators.pattern('^[A-Z][a-z]+$')]],
      prenom: ['',[Validators.required,Validators.pattern('^[A-Z][a-z]+$')]],
      datedenais: [''],
      txtad: [''],
      sexe:[''],
      tel: [''],
      mail:['',[Validators.required,Validators.email]],
      pass:['',Validators.required],
      commentaire:[''],
      // preferences: this.fb.array([])

    }) 
  }
  // public get lesPreferences()
  // { return this.FormG.get('preferences') as FormArray    }
  onReset(){
    this.FormG.reset();
    }
     get nom(){
      return this.FormG.get('nom');
        }
    get prenom(){
        return this.FormG.get('prenom');
        }
    get email(){
      return this.FormG.get('mail');
           }
      get motPass(){
            return this.FormG.get('pass');
             }
             get commentaire(){
              return this.FormG.get('commentaire');
               }
// Ajouter()
// {
// this.lesPreferences.push(new FormControl(''));
// }

onAjouter(){
  this.clientServise.addReferences(this.FormG.value)
   .subscribe(dd=>this.lesReferences.push(dd));
}

}
