import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  name = signal<string>("johan camilo perez morales");
  email = signal<string>("johanpaezmendoza@gmail.com");
  location = signal<string>("Colombia, Ocaña, Norte de Santander");
  phone = signal<number>(3152098454);
}
