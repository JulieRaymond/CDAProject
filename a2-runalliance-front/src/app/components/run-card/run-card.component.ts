import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {GroupCardComponent} from "../group-card/group-card.component";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {Course} from "../../shared/interfaces/run.interface";

@Component({
  selector: 'app-run-card',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule, GroupCardComponent, NgOptimizedImage, DatePipe
  ],
  templateUrl: './run-card.component.html',
  styleUrl: './run-card.component.scss'
})
export class RunCardComponent {
  // Objet fictif représentant un exemple de cours
  courseExemple: Course = {
    courseID: 1,
    title: "Titre du cours",
    description: "Rejoignez notre cours de course à pied rapide et découvrez les techniques et les astuces des experts pour devenir plus rapide, plus endurante et plus performante !\n",
    date: new Date(2024, 5, 31),
    available_hours: ['09:00', '10:00', '11:00'],
    level: "Groupe Orange",
    kilometer: "10km",
    time: "35min",
    kmbyhour: "8 à 9 km/h",
    pace: "(entre 6’40 et 7’30 min/km)",
    image: "/assets/images/run-image.svg"
  };

}
