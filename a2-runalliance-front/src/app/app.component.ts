import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {HomepageComponent} from "./features/homepage/homepage.component";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "./components/button/button.component";
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MatIconModule, NavigationBarComponent, FooterComponent, HomepageComponent, NgOptimizedImage],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
    templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A2RunAlliance-front';
}
