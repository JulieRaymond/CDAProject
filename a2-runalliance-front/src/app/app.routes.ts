import { Routes } from '@angular/router';
import {HomepageComponent} from "./features/homepage/homepage.component";
import {ProfilpageComponent} from "./features/profilpage/profilpage.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'profil', component: ProfilpageComponent },
];
