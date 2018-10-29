import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Heroe } from '../components/interfaces/heroe.interface';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
)

export class HeroesService {
  heroesURL: string = "https://heroesapp-ec9cf.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-ec9cf.firebaseio.com/heroes/";

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

   actualizarHeroe(heroe: Heroe, key$:string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${this.heroeURL}/${key$}.json`;
   return this.http.put(url, body, { headers})
       .pipe(
         map(res => {
           console.log(res);
           return res; }
           ));

  }


  getHeroe(key$:string){

    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.get(url)
      .pipe(
        map(res => res)
      );
  }

  //metodo que retonra todos los heroes

  getHeroes(){


    return this.http.get(this.heroesURL)
      .pipe(
        map(res => res)
      );
  }
  //borrar heroe
  borrarHeroe(key$:string){
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete(url)
      .pipe(map(res => res));
  }



}
