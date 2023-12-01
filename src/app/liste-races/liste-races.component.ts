import { Component, OnInit } from '@angular/core';
import { Race } from '../model/race.model';
import { ChienService } from '../services/chien.service';

@Component({
  selector: 'app-liste-races',
  templateUrl: './liste-races.component.html',
  styleUrls: ['./liste-races.component.css']
})
export class ListeRacesComponent implements OnInit {
  races! : Race[];
  updatedRc:Race = {"idRc":0,"nomRc":""};
  ajout:boolean=true;


  constructor(private chienService : ChienService) { }
  ngOnInit(): void {
  this.chienService.listeRaces().
  subscribe(rcs => {this.races = rcs._embedded.races;
  console.log(rcs);
});
} 

chargerRaces(){
  this.chienService.listeRaces().
  subscribe(rcs => {this.races = rcs._embedded.races;
  console.log(rcs);
  });
  }

raceUpdated(rc:Race){
  console.log("rc updated event",rc);
  this.chienService.ajouterRace(rc).
   subscribe( ()=> this.chargerRaces());
  }

  
updateRc(rc:Race) {
  this.updatedRc=rc;
  this.ajout=false; 
  }
      
}
