import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import{NgModule} from "@angular/core";
import{RouterModule, Routes} from "@angular/router";

//routes
const appRoutes: Routes = [
  {path:'', redirectTo:'pokemons', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}


];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
