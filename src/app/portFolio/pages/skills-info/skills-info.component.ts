import { Component } from '@angular/core';
import { Category, SkillColors, SkillInterface } from '../../interfaces/skill-interface';
import { ListSkillComponent } from '../../components/list-skill/list-skill.component';

@Component({
  selector: 'app-skills-info',
  imports: [ListSkillComponent],
  templateUrl: './skills-info.component.html',
  styleUrl: './skills-info.component.css'
})
export class SkillsInfoComponent {
  allCategory = Object.values(Category);
  allSkills: SkillInterface[] = [

    {
      category: Category.lengs,
      name: 'JavaScript',
      level: 'Medio',
      percent: 80,
      iconUrl: '/assets/images/javas.png',
      percentColor: SkillColors.eighty
    },
    {
      category: Category.lengs,
      name: 'TypeScript',
      level: 'Medio',
      percent: 70,
      iconUrl: '/assets/images/type.png',
      percentColor: SkillColors.seventy
    },
    {
      category: Category.lengs,
      name: 'Java',
      level: 'Junior',
      percent: 50,
      iconUrl: '/assets/images/java.png',
      percentColor: SkillColors.fifty
    },
    {
      category: Category.frameworks,
      name: 'Angular',
      level: 'Medio',
      percent: 90,
      iconUrl: '/assets/images/angular.png',
      percentColor: SkillColors.ninety
    },

    {
      category: Category.tools,
      name: 'GitHub',
      level: 'Medio',
      percent: 80,
      iconUrl: '/assets/images/github.png',
      percentColor: SkillColors.eighty
    },
    {
      category: Category.tools,
      name: 'Docker Desktop',
      level: 'Bajo',
      percent: 40,
      iconUrl: '/assets/images/docker.png',
      percentColor: SkillColors.forty
    },
    {
      category: Category.tools,
      name: 'Postman',
      level: 'Medio',
      percent: 70,
      iconUrl: '/assets/images/postman.png',
      percentColor: SkillColors.seventy
    },

  ]
}
