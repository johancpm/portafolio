import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';

import { filter, map, tap } from 'rxjs';
import { routes } from '../../app.routes';
import { TitleCasePipe } from '@angular/common';


export enum IteMenu {
  skill = 'Tecnologias',
  experience = 'experiencia',
  proyect= 'proyectos',
  studies = 'Formacion',
}

@Component({
  selector: 'app-nav-bar-menu',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './nav-bar-menu.component.html',
  styleUrl: './nav-bar-menu.component.css'
})
export class NavBarMenuComponent  {


   router = inject(Router);

    menuTitles =  Object.values(IteMenu) ;


 redirectRout$ = this.router.events.pipe(
  filter((event) => event instanceof NavigationEnd),
  map ((event) => event.url),
  map((url) => url.split('/')),
  tap( (url) => {
    setTimeout(() => {
      this.redirecTo(url[2])
    }, 200);
  })

 ).subscribe();


 redirecTo(idSelect: string) {
   const element = document.getElementById(idSelect);
    if(element){
     element.scrollIntoView({behavior: 'smooth',block: 'start'})
    }

 }

 @HostListener('window:scroll', ['$event'])
 onWindowScroll(){
  const scrollPosition = window.pageYOffset;
  const section1 = document.getElementById('inf')!.offsetLeft;
  const section2 = document.getElementById('Tecnologias')!.offsetLeft;


  if (scrollPosition >= section1 && scrollPosition < section2) {
    this.router.navigate(['/home','info'])
  }
 }
}
