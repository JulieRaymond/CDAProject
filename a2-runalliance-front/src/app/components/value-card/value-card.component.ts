import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgIf
  ],
  templateUrl: './value-card.component.html',
  styleUrl: './value-card.component.scss'
})
export class ValueCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() imageSrc!: string;
}
