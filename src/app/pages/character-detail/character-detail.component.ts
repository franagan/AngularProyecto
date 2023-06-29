import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterInterface } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})

export class CharacterDetailComponent {
  characterItem: CharacterInterface;


  constructor(private characterService: CharacterService, private route: ActivatedRoute ){
    this.characterItem={
      _id: "string",
      title: "string",
      director: "string",
      year: 2000,
      image: "string",
      genre: "string",
    }
  }

ngOnInit(){
  this.route.params.subscribe(params => {
    console.log(params['id']);
    this.getCharacterDetails(params['id']);
    })
  }

  private getCharacterDetails(id:string){
    this.characterService.getApiCharactersDetail(id).subscribe((movie:CharacterInterface)=>
    {
  console.log(movie);
  this.characterItem=movie;
  console.log(this.characterItem);
    })
  }
}
