import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { NosProduitComponent } from './nos-produit/nos-produit.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
   
    HomeComponent,
    MenuAdminComponent,
    NosProduitComponent,
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
