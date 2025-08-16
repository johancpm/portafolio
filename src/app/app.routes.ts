import { Routes } from '@angular/router';
import { HomePageComponent } from './portFolio/layout/home-page/home-page.component';



export const routes: Routes = [
   {
    path:'home/:id?',
    component: HomePageComponent
   },
   {
    path: "**",
    redirectTo: 'home/',
    pathMatch: 'full'



   }
];
