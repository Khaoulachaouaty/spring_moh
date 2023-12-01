import { Component, OnInit } from '@angular/core';
import { ChienService } from '../services/chien.service';
import { Chien } from '../model/chien.model';
import { Race } from '../model/race.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  chiens! : Chien[];
  nomChiens! : string ;
  searchTerm!: string;
  allLivres! : Chien[];

  
  constructor(private chienService: ChienService) {}

  ngOnInit(): void {
    this.chienService.listeChiens().subscribe(chien => {
      console.log(chien);
      this.chiens = chien;
      });
      
  }

  rechercherChiens(){
    this.chienService.rechercherParNom(this.nomChiens).
    subscribe(chiens => {
    this.chiens = chiens;
    console.log(chiens)});
    }

    onKeyUp(filterText : string){
      this.chiens = this.chiens.filter(item =>
        item.nomChien && item.nomChien.toLowerCase().includes(filterText));
    }
}
