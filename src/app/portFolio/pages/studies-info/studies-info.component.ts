import { Component } from '@angular/core';
import { Studies } from '../../interfaces/studies-interface';
import { StudiesComponent } from '../../components/studies/studies.component';

@Component({
  selector: 'app-studies-info',
  imports: [StudiesComponent],
  templateUrl: './studies-info.component.html',
  styleUrl: './studies-info.component.css'
})
export class StudiesInfoComponent {


  studies: Studies[] = [
    {
      title: 'Servicio Nacional de Aprendizaje | SENA',
      subTtitle: 'Sede Ocaña',
      info: 'Técnico en programación de software, 6 meses de etapalectiva del 15 de abril del 2021 hasta 18 de diciembre del2021 y etapa productiva de 03 de marzo de 2022 al 02septiembre del 2022.',
      img: '/assets/images/sena1.png',
      ceLink: '/assets/docs/Ce1_jcpm.pdf'
    },
    {
      title: 'Udemy',
      subTtitle: 'Curso Virtual',
      info: 'módulos vistos en el desarrollo del curso; Despliegues a Producción, Pipes Personalizados, Rutas Hijas y lazyloading, Angular Material, Protección de rutas, Formularios Reactivos, standalone Components, Directivas Personalizadas, Signals Angular, despliegue en producción, Mapas en Angular.',
      img: '/assets/images/udemy.png',
      ceLink: '/assets/docs/Ce_jcpm.pdf'

    },
  ]
}
