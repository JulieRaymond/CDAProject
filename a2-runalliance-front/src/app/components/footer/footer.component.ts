import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatListItem
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLogoPath = "/assets/logos/logoA2-black.png";
}
