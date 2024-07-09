import { Component } from '@angular/core';
import {TeacherCardComponent} from "../../components/teacher-card/teacher-card.component";
import {NgForOf} from "@angular/common";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-associationpage',
  standalone: true,
  imports: [
    TeacherCardComponent,
    NgForOf,
    ButtonComponent
  ],
  templateUrl: './associationpage.component.html',
  styleUrl: './associationpage.component.scss'
})
export class AssociationpageComponent {
  teachers = [
    {
      name: 'John Doe',
      bio: 'Entraîneur expérimenté en course à pied.',
      avatarUrl: 'assets/images/teacher1.png'
    },
    {
      name: 'Jane Smith',
      bio: 'Spécialiste en entraînement pour marathons.',
      avatarUrl: 'assets/images/teacher2.png'
    }
  ];

  associationPathImage = "/assets/images/association.png";
  associationTitle ="Association A2 Running Bordeaux";

  introductionText: string ="Bienvenue sur la page officielle de l'association A2 Running, une communauté dynamique et passionnée dédiée à la course à pied !\n" +
    "\n" +
    "Chez A2 Running, nous croyons fermement que la course à pied est bien plus qu'un simple exercice physique. C'est un mode de vie, une passion partagée, une aventure humaine qui transcende les frontières et unit les individus autour d'un objectif commun : celui de se dépasser, de repousser ses limites et de vivre pleinement chaque instant.\n" +
    "\n" +
    "Fondée par deux amies, Alice et Anne, surnommées affectueusement les 2 \"A\", notre association est née de leur désir de partager leur amour pour la course dans un esprit d'entraide et de camaraderie. Ce qui a commencé comme de simples footings entre amis s'est rapidement transformé en un mouvement grandissant, rassemblant des coureurs de tous horizons et de tous niveaux.\n" +
    "\n" +
    "Aujourd'hui, A2 Running est bien plus qu'un simple club de course à pied. C'est une véritable famille, une communauté où chacun trouve sa place, où les débutants sont encouragés et soutenus dans leurs premiers pas, où les coureurs confirmés trouvent inspiration et camaraderie, et où tous partagent une même passion pour la course à pied.\n" +
    "\n" +
    "Au cœur de notre association, vous trouverez 3 professeurs dévoués et expérimentés, chacun apportant sa propre expertise et sa passion pour la course à pied. Jo, Marie, et Léa sont là pour vous guider, vous motiver et vous inspirer à donner le meilleur de vous-même à chaque séance.\n" +
    "\n" +
    "Rejoignez-nous chez A2 Running et découvrez une nouvelle façon de vivre la course à pied, dans la convivialité et le partage !";


  constructor() { }

  ngOnInit(): void { }
}
