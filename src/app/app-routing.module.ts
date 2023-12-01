import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChienComponent } from './chiens/chiens.component';
import { AddChienComponent } from './add-chien/add-chien.component';
import { UpdateChienComponent } from './update-chien/update-chien.component';
import { RechercheParRaceomponent } from './recherche-par-race/recherche-par-race.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeRacesComponent } from './liste-races/liste-races.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ChienGuard } from './chien.guard';


const routes: Routes = [
  {path: "chiens", component : ChienComponent},
  { path: "add-chien", component: AddChienComponent, canActivate: [ChienGuard] },
  {path: "", redirectTo: "chiens", pathMatch: "full" },
  {path: "updateChien/:id", component: UpdateChienComponent},
  {path: "rechercheParRace", component : RechercheParRaceomponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeRaces", component : ListeRacesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
