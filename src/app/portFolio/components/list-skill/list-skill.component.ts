import { Component, input } from '@angular/core';
import { Category, SkillInterface } from '../../interfaces/skill-interface';

@Component({
  selector: 'app-list-skill',
  imports: [],
  templateUrl: './list-skill.component.html',
  styleUrl: './list-skill.component.css'
})
export class ListSkillComponent {
  allCategory = Object.values(Category);
  skill = input.required<SkillInterface>();
}
