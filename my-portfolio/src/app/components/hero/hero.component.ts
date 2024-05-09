import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { HeroVideoComponent } from './hero-video.component';
import { NgOptimizedImage } from '@angular/common';
import { TiltDirective } from '../../directives/tilt.directive';
import TypeIt from 'typeit';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [HeroVideoComponent, NgOptimizedImage, TiltDirective],
  encapsulation: ViewEncapsulation.None,
  template: ` <section class="hero"> 
    <hero-video></hero-video>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="title col-md-6">
        <h2 class="tagline-title"></h2>
        <p class="about ">
          I'm a Full Stack Software Engineer with experience in Webiste, Mobile and software development.
        </p>
      </div>
      <div class="col-md-6" data-aos="fade-left">
        <div class="image">
          <img
            tilt
            [ngSrc]="'./assets/images/icons.svg'"
            width="650"
            height="650"
            decoding="sync"
          />
        </div>
      </div>
    </div>
  </section>`,

  styles: `
    hero{
      .hero {
        margin-top: 100px;
        position: relative;
        
        .title {
          z-index: 99;
        }

        .image {
          width: 100% !important;
          z-index: 999 !important;
        }
      .about{
        margin-bottom: 20px;
          margin-left: 20px;
          color: #999;
      }
        .tagline-title {
          font-size: 3rem;
          margin-bottom: 20px;
          margin-left: 20px;

          .front-end, .back-end {
            color: transparent;
            background-image: linear-gradient(to right, white, rgba(255, 308, 255, 0.7));
            -webkit-background-clip: text;
            background-clip: text;
          }

          .creativity {
            color: transparent;
            background-image: linear-gradient(to right, #3498db, #9b59b6);
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
      }
    }
    `,
})
export class HeroComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    new TypeIt('.tagline-title', {
      beforeStep:  function (instance: any) {
        instance.getElement().style.color = '#fff';
        instance.getElement().style.fontWeight = 'bold';
      },
      speed: 50,
      startDelay: 600,
    })
      .type('Providing')
      .type(`<span style=" background: linear-gradient(to right, #a855f7, #06b6d4);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;">
        the best
        </span>`
      )
      .type('project experience.')
    
    .go();


    // new TypeIt('.tagline-title', {
    //   afterStep: function (instance: any) {
    //     instance.getElement().style.color = '#9b59b6';
    //   },
    //   speed: 50,
    //   startDelay: 900,
    //   loop: true,
    // })
    //   .type('briging frontend ', { delay: 100 })
    //   .move(-14, { delay: 100 })
    //   .type('n', { delay: 400 })
    //   .move(null, { to: 'START', instant: true, delay: 300 })
    //   .move(1, { delay: 200 })
    //   .delete(1)
    //   .type('B', { delay: 225 })
    //   .move(null, { to: 'END', instant: true, delay: 300 })
    //   .type('creativity with ', { delay: 350 })
    //   .type('backend nationality.', { delay: 350 })
    //   .move(-10, { delay: 100 })
    //   .delete(2)
    //   .type('func', { delay: 400 })
    //   .move(null, { to: 'END' })
    //   .type('!')
    //   .go();
  }
}
