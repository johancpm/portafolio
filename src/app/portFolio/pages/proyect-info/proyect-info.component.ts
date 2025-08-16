import { Component } from '@angular/core';
import { Colors, ProyectInterface } from '../../interfaces/proyect-interface';
import { ProyectComponent } from '../../components/proyect/proyect.component';

@Component({
  selector: 'app-proyect-info',
  imports: [ProyectComponent],
  templateUrl: './proyect-info.component.html',
  styleUrl: './proyect-info.component.css'
})
export class ProyectInfoComponent {

  proyectos: ProyectInterface[] = [
    {

      title: 'App Paises',
      info: 'Es una aplicaion que nos permite hacer busqueda de paises, capitales y regiones y obtener su informacion, Utilizando una api donde se encuentra toda la informacion de los paises.',
      img: '/assets/images/country.png',
      tecnologies: [
        { name: 'Angular', icon: '/assets/images/angular.png', color: Colors.angular },
        { name: 'TypeScript', icon: '/assets/images/type.png', color: Colors.typescript },
      ],
      gitLink: 'https://github.com/johancpm/AppCountryes.git',
      link: 'https://countriesjcpm.netlify.app/#/page-home'
    },
    {

      title: 'App Teslo-Shop',
      info: 'aplicacion web de venta de ropa, se pueden ver los diferentes productos por genero. Implementa un formulario de inicio de sesion y de registro. tambien cuenta con un panel administrativo para actualizar y subir nuevos productos.',
      img: '/assets/images/teslo.png',
      tecnologies: [
        { name: 'Angular', icon: '/assets/images/angular.png', color: Colors.angular },
        { name: 'TypeScript', icon: '/assets/images/type.png', color: Colors.typescript },
        { name: 'Nest.js', icon: '/assets/images/nest.png', color: Colors.nest },
        { name: 'SQL', icon: '/assets/images/sql.png', color: Colors.typescript },
      ],
      link: 'https://teslo-shop-jcpm.netlify.app/#/gender/men',
      gitLink: 'https://github.com/johancpm/teslo-shop-front-end.git'
    },
    {

      title: 'App Map',
      info: 'Es una aplicaion de mapa que nos permite ver nuestra hubicacion con latitud y longitud, tambien nos permite agregar marcadores y almacenarlos en una lista usando la api de MapBox.',
      img: '/assets/images/map.png',
      tecnologies: [
        { name: 'Angular', icon: '/assets/images/angular.png', color: Colors.angular },
        { name: 'TypeScript', icon: '/assets/images/type.png', color: Colors.typescript },
      ]
    },
  ];
}
