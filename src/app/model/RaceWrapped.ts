import { Race } from './race.model';
export class RaceWrapper{
_embedded!: { races: Race[]};
}