import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';
import { ChienService } from '../services/chien.service';
import { Race } from '../model/race.model';
import {Router} from '@angular/router'
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-chien',
  templateUrl: './add-chien.component.html',
  styleUrls: ['./add-chien.component.css']
})

export class AddChienComponent implements OnInit {
  newChien = new Chien();
  message: String = "";

  races!: Race[];
  newIdRc!: number;
  newRace!: Race;

  uploadedImage!: File;
  imagePath: any;

  constructor(private chienService: ChienService,
    private router: Router) { }
  ngOnInit(): void {
    this.chienService.listeRaces().
      subscribe(rcs => {
        this.races = rcs._embedded.races;
        console.log(rcs);
      });
  }




  addChien() {
    if (this.newIdRc !== undefined) {
      this.newChien.race = this.races.find(rc => rc.idRc == this.newIdRc)!;
      this.chienService
        .ajouterChien(this.newChien)
        .subscribe((chien) => {
          if (this.uploadedImage) {
            if (chien.idChien !== undefined) {
              this.chienService
                .uploadImageFS(this.uploadedImage, this.uploadedImage.name, chien.idChien)
                .subscribe((response: any) => { }
              );
            } else {
              console.error('chien.idChien is undefined.');
            }
          }
          this.router.navigate(['chiens']);
        });
    } else {
      // Handle the case when newIdEd is undefined
      console.error('newIdEd is undefined.');
    }
  }
  

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }
}
