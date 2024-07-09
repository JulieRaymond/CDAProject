import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {StatisticComponent} from "../statistic/statistic.component";
import {RunCardComponent} from "../run-card/run-card.component";

@Component({
  selector: 'app-tab-profil-menu',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    StatisticComponent,
    RunCardComponent
  ],
  templateUrl: './tab-profil-menu.component.html',
  styleUrl: './tab-profil-menu.component.scss'
})
export class TabProfilMenuComponent {

}
