import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {Course} from "../../shared/interfaces/run.interface";

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    NgClass
  ],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.scss'
})
export class GroupCardComponent {
  @Input() course!: Course;

  getGroupClass() {
    switch (this.course.level) {
      case 'Groupe Orange':
        return 'group-orange';
      case 'Groupe Jaune':
        return 'group-yellow';
      case 'Groupe Rose':
        return 'group-pink';
      case 'Groupe Bleu':
        return 'group-blue';
      case 'Groupe Vert':
        return 'group-green';
      case 'Groupe Rouge':
        return 'group-red';
      default:
        return '';
    }
  }
}
