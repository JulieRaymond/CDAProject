import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from '@angular/material/core';
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatStep, MatStepper} from "@angular/material/stepper";
import {GroupCardComponent} from "../group-card/group-card.component";
import {Course} from "../../shared/interfaces/run.interface";

@Component({
  selector: 'app-calendar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule, MatDatepickerModule, NgIf, MatButton, NgForOf, MatStepper, MatStep, GroupCardComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent {
  isLinear = false;
  selectedDate: Date | null = null;
  selectedHour: string | null = null;
  selectedCourse: Course | null = null;
  stepperIndex: number = 0; // Pour suivre l'index de l'étape actuelle

  formatDateToFrench(selectedDate: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return selectedDate.toLocaleDateString('fr-FR', options);
  }

  // Objet fictif représentant un exemple de cours
  courseExemple: Course = {
    courseID: 1,
    title: "Sprint",
    description: "Description Course 1",
    date: new Date(2024, 5, 31),
    available_hours: ['09:00', '10:00', '11:00'],
    level: "Groupe Orange",
    kilometer: "8km",
    time: "35min",
    kmbyhour: "8 à 9 km/h",
    pace: "(entre 6’40 et 7’30 min/km)"
  };

  // Méthode pour avancer à l'étape suivante du stepper
  nextStep(): void {
    this.stepperIndex++;
  }

  // Méthode pour réserver le cours
  reserveCourse(): void {
    // Implémentez ici la logique de réservation
    console.log('Course réservée:', this.selectedCourse);
  }
}
