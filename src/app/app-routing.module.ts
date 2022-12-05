import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { NouveauVoitureComponent } from './nouveau-voiture/nouveau-voiture.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProposDeNousComponent } from './propos-de-nous/propos-de-nous.component';
import { SelectedproduitComponent } from './selectedproduit/selectedproduit.component';

const routes: Routes = [
{path:'accueil',title:'Accueil', component:AccueilComponent},
{path:'produits',title:'Produits', component:ProduitsComponent},
{path:'produits/:id',title:'Mesproduits',component:SelectedproduitComponent},
{path:'contact',title:'Contact', component:ContactComponent},
{path:'proposDeNous',title:'Propos',component:ProposDeNousComponent},
{path:'accueil/:id',title:'Nouveau', component:NouveauVoitureComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**', title:'Erreur',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
