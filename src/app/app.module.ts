import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChienComponent } from './chiens/chiens.component';
import { AddChienComponent } from './add-chien/add-chien.component';

import { FormsModule } from '@angular/forms';
import { UpdateChienComponent } from './update-chien/update-chien.component';
import { RechercheParRaceomponent } from './recherche-par-race/recherche-par-race.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeRacesComponent } from './liste-races/liste-races.component';
import { UpdateRaceComponent } from './update-race/update-race.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChienComponent,
    AddChienComponent,
    UpdateChienComponent,
    RechercheParRaceomponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeRacesComponent,
    UpdateRaceComponent,
    LoginComponent,
    ForbiddenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})

export class AppModule { }
