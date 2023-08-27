import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector:'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
 
    constructor(
        //habilita toda la información del dbzService en el compomente
        private dbzService: DbzService
    ){}

    get characters(): Character[]{
        //usamos el operador spreed para enviar un copia del arreglo que trae el servicio
        return [...this.dbzService.characters]
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character:Character): void{
        this.dbzService.addCharacter(character);
    }

}