import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-teacher-card',
  standalone: true,
  imports: [],
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.scss'
})
export class TeacherCardComponent {
  @Input() name: string = '';
  @Input() bio: string = '';
  @Input() avatarUrl: string = '';
}
