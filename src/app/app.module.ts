import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { MenuComponent } from './menu/menu.component';
import { SelectedproduitComponent } from './selectedproduit/selectedproduit.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouveauVoitureComponent } from './nouveau-voiture/nouveau-voiture.component';
import { AdminModule } from './admin/admin.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProposDeNousComponent } from './propos-de-nous/propos-de-nous.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    ContactComponent,
    ErreurComponent,
    MenuComponent,
    SelectedproduitComponent,
    FilterPipe,
    NouveauVoitureComponent,
    AuthentificationComponent,
    ProposDeNousComponent
  
   

  
   
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
