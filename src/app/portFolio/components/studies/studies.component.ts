import { Component, input } from '@angular/core';
import { Studies } from '../../interfaces/studies-interface';

@Component({
  selector: 'app-studies',
  imports: [],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css'
})
export class StudiesComponent {
 studie = input.required<Studies>();
}
