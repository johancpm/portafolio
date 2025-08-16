import { Component } from '@angular/core';
import { DataInfoComponent } from "../../pages/data-info/data-info.component";
import { SkillsInfoComponent } from "../../pages/skills-info/skills-info.component";
import { ProyectInfoComponent } from "../../pages/proyect-info/proyect-info.component";
import { StudiesInfoComponent } from "../../pages/studies-info/studies-info.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [ DataInfoComponent, SkillsInfoComponent, ProyectInfoComponent, StudiesInfoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
