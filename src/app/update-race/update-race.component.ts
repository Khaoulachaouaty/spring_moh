import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Race } from '../model/race.model';

@Component({
  selector: 'app-update-race',
  templateUrl: './update-race.component.html',
  styleUrls: ['./update-race.component.css']
})
export class UpdateRaceComponent implements OnInit{
  @Input()
  race! : Race;

  @Input()
  ajout!:boolean;

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateRace ",this.race);
    }

  @Output()
  raceUpdated = new EventEmitter<Race>();
    
  saveRace(){
    this.raceUpdated.emit(this.race);
    }
        

}
