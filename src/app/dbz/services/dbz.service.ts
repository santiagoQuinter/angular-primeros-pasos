import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
    //lo inyecta a toda la apliación y así no tengo que importarlo en los modules
    providedIn: 'root'
})
export class DbzService{
    public characters:Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9000
        },
        {
            id: uuid(),
            name:'Vegeta',
            power: 12000
        }
    ];

    addCharacter(character: Character):void {
        const newCharacter: Character = {id:uuid(), ...character}
        console.table( {newCharacter});
        this.characters.push(newCharacter);
    }

    deleteCharacterById(id: string){
        this.characters = this.characters.filter(character => character.id !== id);
    }

    // deleteCharacter(index: number){
    //     this.character.splice(index,1);
    // }

}