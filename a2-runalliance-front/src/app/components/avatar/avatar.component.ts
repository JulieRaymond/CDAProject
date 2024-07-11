import {Component} from '@angular/core';
import {MatCard, MatCardAvatar, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {ValueCardComponent} from "../value-card/value-card.component";
import {NgOptimizedImage} from "@angular/common";

export interface User {
  name: string;
}

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    MatCard,
    MatCardAvatar,
    ValueCardComponent,
    NgOptimizedImage,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  user: User = {
    name: 'Olayemi'
  };

  avatarImagePath = "/assets/images/avatar2.png";
}
