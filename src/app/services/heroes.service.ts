import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Heroe } from '../components/interfaces/heroe.interface';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
)
export class HeroesService {
  heroesURL: string = "https://heroesapp-ec9cf.firebaseio.com/heroes.json"

  constructor(private http: HttpClient) {

   }

   nuevoHeroe(heroe: Heroe) {
     let body = JSON.stringify(heroe);
     let headers = new HttpHeaders({
       'Content-Type':'application/json'
     });
    return this.http.post(this.heroesURL, body, { headers})
        .pipe(
          map(res => {
            console.log(res);
            return res; }
            ));

   }
}
