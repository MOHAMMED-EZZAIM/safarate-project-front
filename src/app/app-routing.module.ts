import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropAppartementListComponent} from "./view/propAppartement/list/propAppartement-list.component";
import {ListComponent} from "./view/categoriesAppartement/list/list.component";
import {NavbarComponent} from "./view/navbar/navbar.component";
import {CategoriesAppartement} from "./shared/model/appartementModel/categories-appartement.model";
import {Appartement} from "./shared/model/appartementModel/appartement.model";
const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"propritaire",component:PropAppartementListComponent},
  {path:"categpories",component:ListComponent},
  {path:"appartement",component:Appartement},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
