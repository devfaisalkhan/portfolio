import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CardsVideoComponent } from './skills-video.component';
import { SkillTextComponent } from './skill-text.component';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TiltDirective,
    CardsVideoComponent,
    SkillTextComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section
      class="skills w-100 position-relative d-flex justify-content-center align-items-center"
    >
      <skills-video></skills-video>
      <skill-text></skill-text>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="images object-fit-cover d-flex justify-content-evenly flex-shrink-1 m-4"
      >
        @for(image of frontEnd; track $index) {
          <div class="img">
          <img
            class="object-fit-cover m-2"
            [src]="image"
            tilt
            loading="lazy"
          />
          </div>
        }
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="images object-fit-cover d-flex justify-content-evenly flex-shrink-1 m-4"
      >
        @for(image of backend; track $index) {
          <div class="img">
          <img
            class="object-fit-cover m-2"
            [src]="image"
            tilt
            loading="lazy"
          />
          </div>
        }
      </div>
    </section>
  `,
  styles: `
      skills{
        .skills{
          flex-direction: column;
          .images{
            flex-wrap: wrap !important;
            overflow: hidden ;
            position: relative;
            z-index: 99;
            .img{
              transition: transform 0.3s;
              
              &:hover{
                transform: scale(1.5);
              }
            }
            img{
              margin: 8px 16px;
              width: 60px;
              height: 60px;
            }
           }
        }

      }
      
      @media only screen and (max-width: 786px) {
        skills{
          .images{
          overflow: hidden !important;
        }
        img{
          width: 36px;
          height: 36px;
          margin: 12px;
        }
        }
      }

    `,
})
export class SkillsComponent {
  images = [];

  frontEnd = [
    './assets/images/css.png',
    './assets/images/html.png',
    './assets/images/js.png',
    './assets/images/react.png',
    // './assets/images/favicon.ico',
    './assets/images/bootstrap.svg',
    './assets/images/gitwhite.png',
    './assets/images/chartjs.svg',
    './assets/images/capacitor.svg',
    './assets/images/ionic.svg',
  ];

  backend = [
    './assets/images/node-js.png',
    './assets/images/mongodb.png',
    './assets/images/mysql.svg',
    './assets/images/nestjs.svg',
    './assets/images/csharp.svg',
    './assets/images/docker.png',
    './assets/images/net.svg',
  ];
  constructor() {}
}
