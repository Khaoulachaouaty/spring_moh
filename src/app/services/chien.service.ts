import { Injectable } from '@angular/core';
import { Chien } from '../model/chien.model';
import { Race } from '../model/race.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLRc } from '../config';
import { RaceWrapper } from '../model/RaceWrapped';
import { AuthService } from './auth.service';
import { Image } from '../model/image.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class ChienService {

    chiens: Chien[] = []; //un tableau de chien
    chien!: Chien;
    races: Race[] = [];
    apiURL: string = 'http://localhost:8080/chiens/api';
    apiURLRc: string = 'http://localhost:8080/chiens/rc';

    constructor(private http: HttpClient,
        private authService: AuthService) {
        
    }

    listeChiens(): Observable<Chien[]> {
        return this.http.get<Chien[]>(apiURL + "/all");
    }

    ajouterChien(chien: Chien): Observable<Chien> {
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.post<Chien>(apiURL + "/addchien", chien, { headers: httpHeaders });

    }

    supprimerChien(id: number) {
        const url = `${apiURL}/delchien/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.delete(url, { headers: httpHeaders });

    }


    consulterChien(id: number): Observable<Chien> {
        const url = `${apiURL}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.get<Chien>(url, { headers: httpHeaders });
    }

    updateChien(chien: Chien): Observable<Chien> {
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.put<Chien>(apiURL + "/updatechien", chien, { headers: httpHeaders });
    }

    
    trierLivres() {
        this.chiens = this.chiens.sort((n1, n2) => {
            if (n1?.idChien && n2?.idChien) {
                if (n1.idChien > n2.idChien) {
                    return 1;
                }
                if (n1.idChien < n2.idChien) {
                    return -1;
                }
            }
            return 0;
        });
    }

    listeRaces(): Observable<RaceWrapper> {
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.get<RaceWrapper>(this.apiURLRc, { headers: httpHeaders });
    }


   


    rechercherParRace(idRc: number): Observable<Chien> {
        const url = `${apiURL}/rc/${idRc}`;
        return this.http.get<Chien>(url);
    }

    rechercherParNom(nom: string): Observable<Chien[]> {
        const url = `${apiURL}/chiensByName/${nom}`;
        return this.http.get<Chien[]>(url);
    }

    ajouterRace(rc: Race): Observable<Race> {
        return this.http.post<Race>(apiURLRc, rc, httpOptions);
    }


    uploadImage(file: File, filename: string): Observable<Image> {
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${apiURL + '/image/upload'}`;
        return this.http.post<Image>(url, imageFormData);
    }
    loadImage(id: number): Observable<Image> {
        const url = `${this.apiURL + '/image/get/info'}/${id}`;
        return this.http.get<Image>(url);
    }

    uploadImageChien(file: File, filename: string, idChien:number): Observable<any>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + '/image/uplaodImageChien'}/${idChien}`;
        return this.http.post(url, imageFormData);
        }

    supprimerImage(id: number) {
        const url = `${this.apiURL}/image/delete/${id}`;
        return this.http.delete(url, httpOptions);
    }

    uploadImageFS(file: File, filename: string, idChien: number): Observable<any> {
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + '/image/uploadFS'}/${idChien}`;
        return this.http.post(url, imageFormData);
    }
}
