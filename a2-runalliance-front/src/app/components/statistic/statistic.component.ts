import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatGridTile,
    MatGridList
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {

}
