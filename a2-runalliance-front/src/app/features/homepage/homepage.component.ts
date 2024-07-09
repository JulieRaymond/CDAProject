import {Component, ElementRef, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {ValueCardComponent} from "../../components/value-card/value-card.component";
import {ButtonComponent} from "../../components/button/button.component";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {GroupCardComponent} from "../../components/group-card/group-card.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ButtonComponent,
    ValueCardComponent,
    CalendarComponent,
    MatCard,
    GroupCardComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  homepagePathImage = "/assets/images/homepage-mobil.jpg";
  homepageTitle ="Ne courrez plus seul.e !";

  introductionText: string ="A2 Running Bordeaux réunit toutes les personnes qui souhaitent courir en groupe, dans la bonne humeur, l’entraide et surtout sans esprit de compétition.";

  conceptTitle: string = 'Notre concept';
  conceptText: string = 'Ces deux amies dans la vie partagent le plaisir de la course dans un esprit de soutien et d’encouragement ! \n' +
    'Passionnées par ce sport, elles constatent en discutant avec leurs amis que beaucoup n’osent pas se mettre à la course à pied, craignant l’échec ou n’aimant tout simplement pas être seul. \n' +
    'Alors, avec plusieurs centaines de kilomètres à leur actif, Anne et Alice décident de donner rendez-vous à des amis, des proches, pour une course hebdomadaire tout en les encourageant et en communiquant leurs conseils….\n' +
    'Peu à peu, le groupe grandit conduisant ainsi nos deux ambassadrices à concrétiser ce beau projet. \n' +
    'Fin 2013, elles sont rejointes par Sophia, Florence, Marie, Marion, Barbara et Kelly. L’association A2 running est créée.';

  valueTitle: string = 'Nos valeurs';

  calendarTitle ="Trouver un cours";

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) { }


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    const conceptContainer = this.el.nativeElement.querySelector('.concept-container');

    const conceptObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(conceptContainer, 'visible');
        } else {
          this.renderer.removeClass(conceptContainer, 'visible');
        }
      });
    }, {
      threshold: 0.1
    });

    conceptObserver.observe(conceptContainer);

    const valueCards: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.values-container app-value-card');

    valueCards.forEach((card: HTMLElement, index: number) => {
      const delay = index * 0.2;

      this.renderer.setStyle(card, 'transition-delay', `${delay}s`);
      const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(card, 'visible');
          } else {
            this.renderer.removeClass(card, 'visible');
          }
        });
      }, {
        threshold: 0.1
      });

      valueObserver.observe(card);
    });
  }
}
