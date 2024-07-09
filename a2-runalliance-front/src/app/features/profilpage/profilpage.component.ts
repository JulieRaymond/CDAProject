import { Component } from '@angular/core';
import {AvatarComponent} from "../../components/avatar/avatar.component";
import {TabProfilMenuComponent} from "../../components/tab-profile-menu/tab-profil-menu.component";
import {ChartComponent} from "../../components/chart/chart.component";

@Component({
  selector: 'app-profilpage',
  standalone: true,
  imports: [
    TabProfilMenuComponent,
    AvatarComponent,
    ChartComponent
  ],
  templateUrl: './profilpage.component.html',
  styleUrl: './profilpage.component.scss'
})
export class ProfilpageComponent {

}
