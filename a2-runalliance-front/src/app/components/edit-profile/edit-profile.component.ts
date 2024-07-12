import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DropzoneConfigInterface, DropzoneModule} from "ngx-dropzone-wrapper";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    MatSlideToggle,
    DropzoneModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  public profileForm: FormGroup;
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      isVisible: [false] // Contrôle pour la visibilité du profil, initialisé à false (non visible)
    });
  }

  onFileUpload(event: any): void {
    console.log('File uploaded:', event);
    // Ajoutez ici la logique de traitement du téléchargement du fichier si nécessaire
  }

  onSubmit(): void {
    console.log('Form submitted:', this.profileForm.value);
    // Ajoutez ici la logique de sauvegarde du formulaire
  }
}
