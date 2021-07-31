import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {
  heroes: string [] = ['IronMan','AquaMan','SuperMan','BatMan'];  
  borrado : string = "";
  borrarHeroe(index : number) : void {
    this.borrado = this.heroes.shift() || '';
  }
}
