import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {HomepageComponent} from "./features/homepage/homepage.component";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "./components/button/button.component";
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from "ngx-dropzone-wrapper";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post', // URL où envoyer les fichiers uploadés
  maxFiles: 1, // Limite le nombre de fichiers à 1
  maxFilesize: 50, // Taille maximale des fichiers en Mo
  acceptedFiles: 'image/*' // Types de fichiers acceptés (ici seulement des images)
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MatIconModule, NavigationBarComponent, FooterComponent, HomepageComponent, NgOptimizedImage, DropzoneModule],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A2RunAlliance-front';
}
