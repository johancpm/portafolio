import { AfterViewInit, Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMenuComponent } from "./shared/nav-bar-menu/nav-bar-menu.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarMenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  totalHeight: number = 790;
  viewButton: boolean = true;

  scrollToButton (altoura: number) {
       window.scrollTo({
        top:  altoura,
        behavior: 'smooth'
       })

  }

 @HostListener('window:scroll', ['$event'])
 onWindowsScroll() {
  this.viewButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) === 0;
 }

}
