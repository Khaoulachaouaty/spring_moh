import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChienService } from '../services/chien.service';
import { Chien } from '../model/chien.model';
import { Race } from '../model/race.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-chien',
  templateUrl: './update-chien.component.html', styles: []
})

export class UpdateChienComponent implements OnInit {
  currentChien = new Chien();
  races!: Race[];
  updatedRcId!: number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private chienService: ChienService) { }



  ngOnInit(): void {
    this.chienService.listeRaces().
      subscribe(rcs => {
        this.races = rcs._embedded.races;
      });
    this.chienService.consulterChien(this.activatedRoute.snapshot.params['id'])
      .subscribe(chien => {
        this.currentChien = chien;
        this.updatedRcId = chien.race.idRc;
      });
  }


 

  updateChien() {
    this.currentChien.race = this.races.find(rc => rc.idRc ==this.updatedRcId)!;
    this.chienService
    .updateChien(this.currentChien)
    .subscribe((chien) => {
    this.router.navigate(['chiens']);
    });
    }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
    }
  }
  

 /* onAddImageChien() {
    this.ChienService
    .uploadImageChien(this.uploadedImage,this.uploadedImage.name,this.currentChien.idChien)
    .subscribe( (img : Image) => {
    this.currentChien.images.push(img);
    });
    }*/
    onAddImageChien() {
      if (this.currentChien && this.currentChien.idChien !== undefined) {
        this.chienService
          .uploadImageChien(this.uploadedImage, this.uploadedImage.name, this.currentChien.idChien)
          .subscribe((img: Image) => {
            this.currentChien.images.push(img);
          });
      }
    }

  supprimerImage(img: Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.chienService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentChien.images
        const index = this.currentChien.images.indexOf(img, 0);
        if (index > -1) {
          this.currentChien.images.splice(index, 1);
        }
      });
  }

}
