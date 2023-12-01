import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';
import { ChienService } from '../services/chien.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chiens',
  templateUrl: './chiens.component.html',
  styleUrls: ['./chiens.component.css']
})
export class ChienComponent implements OnInit {
  chiens?: Chien[];
  apiurl:string='http://localhost:8080/chiens/api';
  
  constructor(private chienService: ChienService,
    public authService: AuthService) {
  }
  ngOnInit(): void {
    this.chargerChiens();
  }



  chargerChiens() {
    this.chienService.listeChiens().subscribe(chien => {
      this.chiens = chien;
    });
  }
    


  supprimerChien(c: Chien) {
    
    let conf = confirm("Etes-vous sûr ?");
    if (conf && c.idChien !== undefined) {
      this.chienService.supprimerChien(c.idChien).subscribe(() => {
        console.log("chien supprimé");
        this.chargerChiens();
      });
    }
  }
}
