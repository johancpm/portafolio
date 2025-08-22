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

      title: 'Países',
      info: 'Aplicación que nos permite hacer búsqueda de países, capitales, regiones y de esta manera obtener información precisa; implementa una URL amigable que puede ser compartida a muchas personas y de esta manera les permita visualizar el contenido de las búsquedas realizadas, también cuenta con un caché donde se almacena la información de las mismas, para poder retornar a la página anterior sin perder la información.',
      img: '/assets/images/country.png',
      tecnologies: [
        { name: 'Angular', icon: '/assets/images/angular.png', color: Colors.angular },
        { name: 'TypeScript', icon: '/assets/images/type.png', color: Colors.typescript },
      ],
      gitLink: 'https://github.com/johancpm/AppCountryes.git',
      link: 'https://countriesjcpm.netlify.app/#/page-home'
    },
    {

      title: 'Teslo-Shop',
      info: 'Tienda virtual de ropa, nos permite ver los diferentes productos por género, Implementa una paginación para visualizar de mejor forma todos los productos, también cuenta con un formulario de inicio de sesión y de registro. Se puede acceder con una cuenta autorizada a un panel administrativo para actualizar o subir nuevos productos.',
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

      title: 'Map',
      info: 'Aplicación de mapas que nos permite por medio de un panel personalizado ver nuestra ubicación con latitud y longitud, también cuenta con una barra para hacer zoom, igualmente se puede agregar marcadores y almacenarlos en una lista para luego acceder a ellos. Tiene una sección donde se hace una reutilización del componente de mapa para mostrar puntos específicos, ahí se muestra información de la ubicación.',
      img: '/assets/images/map.png',
      tecnologies: [
        { name: 'Angular', icon: '/assets/images/angular.png', color: Colors.angular },
        { name: 'TypeScript', icon: '/assets/images/type.png', color: Colors.typescript },
      ],
      gitLink: 'https://github.com/johancpm/AppMaps.git',
      link: 'https://maps-jcpm-26d051.netlify.app/#/full'
    },
  ];
}
