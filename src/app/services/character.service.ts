import { APP_ID, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CharacterInterface } from './../models/character.model';
import { Observable, map, catchError } from "rxjs";

interface ResponseInterface {
  results: any[]; // Define the appropriate type for the 'results' property
}

@Injectable({
providedIn:'root',

})



export class CharacterService {
getCharactersDetails() {
  throw new Error('Method not implemented.');
}
// public response: string='';
// public results: string='';
constructor(private httpClient: HttpClient){}

getCharacters(): Observable<any> {
  return this.httpClient.get('https://proyect-movies-eight.vercel.app/movie/movies')

  // .pipe(
  //   map(response => {
  //     const characterList: CharacterInterface[] = response.data.map((item: any)=> {
  //       const character: CharacterInterface = {
  //         id: item.id,
  //         title: item.title,
  //         director: item.director,
  //         year: item.year,
  //         image: item.image
  //       }
  //       return character;
  //     });

  //     return characterList;
  //   }),
  //   catchError(err => {
  //     throw new Error(err.message);
  //   }),


  // )


}

getApiCharactersDetail(id: string): Observable<CharacterInterface> {
  return this.httpClient.get<CharacterInterface>(`https://proyect-movies-eight.vercel.app/movie/${id}`)

}
}
