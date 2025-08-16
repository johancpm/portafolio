import { Component, input, signal } from '@angular/core';
import { ProyectInterface } from '../../interfaces/proyect-interface';


@Component({
  selector: 'app-proyect',
  imports: [],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.css'
})
export class ProyectComponent {

  proyecto = input.required<ProyectInterface>();
  id = input.required<number >();
  idProyect: number | null = null;

 viewDetailsProyect(index: number | null ){
    this.idProyect =this.idProyect === index ? null : index;

    const elemtImg = document.getElementById(this.proyecto().title);
    const elemtDiv = document.getElementById(this.id().toString());
    const elemtDiv1 = document.getElementById('proyectos')
    if(elemtDiv && elemtDiv1){
      if(this.idProyect === this.id()){
        elemtDiv.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
         inline: 'nearest'
        })
      }else if(this.idProyect != this.id()){
         elemtDiv1.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
         inline: 'nearest'
        })
      }
    }

   if(this.idProyect === this.id()){
     elemtImg?.classList.add('animate-scroll')
     elemtImg?.classList.remove('animate-scroll2')
   }else if(this.idProyect  != this.id()){
     elemtImg?.classList.add('animate-scroll2')
     elemtImg?.classList.remove('animate-scroll')
   }

 }


}
