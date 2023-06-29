
import { Component } from '@angular/core';
import { CharacterService } from './../../services/character.service';
import { CharacterInterface} from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],

})
export class CharactersComponent {
  characterList: CharacterInterface[] = [];
  filter: string= '';
  constructor(private characterService: CharacterService){ }

  ngOnInit(){
this.getCharacters();
  }
private getCharacters() {
this.characterService.getCharacters().subscribe((data:CharacterInterface) => {
 console.log(data);
 if (Array.isArray(data) && data.length > 0) {
  this.characterList = data;
} else {
  console.error('Invalid data format for character list.');
}
})
}

}
