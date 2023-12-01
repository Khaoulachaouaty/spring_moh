import { Race } from "./race.model";
import { Image } from "./image.model";

export class Chien {
    idChien? : number;
    nomChien? : string;
    prixChien? : number;
    dateNaissance? : Date ;
    race! : Race;
    image! : Image;
    imageStr!:string;
    images!: Image[];
    }