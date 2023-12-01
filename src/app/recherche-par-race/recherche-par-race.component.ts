import { Component, OnInit } from '@angular/core';
import { Race } from '../model/race.model';
import { Chien } from '../model/chien.model';
import { ChienService } from '../services/chien.service';


@Component({
  selector: 'app-recherche-par-race',
  templateUrl: './recherche-par-race.component.html',
  styleUrls: ['./recherche-par-race.component.css']
})
export class RechercheParRaceomponent implements OnInit {
  chiens: Chien[] = [];
  IdRace!: number;
  races!: Race[];
  constructor(private chienService: ChienService) { }
  ngOnInit(): void {
    this.chienService.listeRaces().
      subscribe(rcs => {
        this.races = rcs._embedded.races;
        console.log(rcs);
      });
  }

  onChange() {
    console.log('Hellooo' + this.chiens)
    this.chienService.rechercherParRace(this.IdRace).
      subscribe((_chien: Chien) => {
        this.chiens.push(_chien)
        console.log(this.chiens)
      });
  }
}
