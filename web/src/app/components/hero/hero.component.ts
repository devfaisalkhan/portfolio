import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { HeroVideoComponent } from './hero-video.component';
import { NgOptimizedImage } from '@angular/common';
import { TiltDirective } from '../../directives/tilt.directive';
import TypeIt from 'typeit';
import { FloatingManComponent } from '../flaoting-man.component';


@Component({
  selector: 'hero',
  standalone: true,
  imports: [HeroVideoComponent, NgOptimizedImage, TiltDirective, FloatingManComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
   <section class="hero"> 
    <!-- <hero-video></hero-video> -->
    <div class="row d-flex justify-content-center align-items-center">
      <div class="title col-md-6">
        <h1 class="tagline-title"></h1>
        <p class="about" >
        </p>
      </div>
      <div class="col-md-6" data-aos="fade-left" style="z-index: 9;">
        <div class="image">
          <floating-man></floating-man>
        </div>
      </div>

      <div class="link-icons">
        <a href="https://github.com/devfaisalkhan/" target="_blank">
        <img src="/assets/icons/github-white-icon.svg" >
      </a>
        <a href="https://www.linkedin.com/in/devfaisalkhan/" target="_blank">
        <img src="/assets/icons/linkedin-app-icon.svg" >
        </a>
      </div>
    </div>
  </section>`,

  styles: `
    hero{
      .hero {
        // margin-top: 100px;
        position: relative;
        .row{
          height: 100vh;

        }
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
          font-size: 1.6rem;
      }

      .link-icons{
        position: absolute;
        bottom: 130px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        z-index: 999;
        img{
          width: 50px;
          height: 50px;
          margin: 0px 10px;
          
        }
      }
        .tagline-title {
          font-size: 3.2rem;
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
      speed: 10,
    })
      .type('Faisal')
      .type(`<span style=" background: linear-gradient(to right, #a855f7, #06b6d4);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;">
        Khan
        </span>`
      )
    .go();



    new TypeIt('.about', {
      // afterStep: function (instance: any) {
      //   instance.getElement().style.color = `hsl(${Math.random() * 360}, 70%, 70%)`; // Magical color-changing effect
      // },
      speed: 60,
      startDelay: 1000,
      loop: false,
    })
    .type('Engineering dreams into reality.', { delay: 200 }) // Initial typing
    .pause(1000) 
    .delete('', { delay: 700 }) // Remove the text
    .type('Transforming futures with purpose.', { delay: 200 }) // Sentence 2
    .pause(1000) 
    .move(14, { delay: 300 }) // Move cursor to the start
    .delete(7, { delay: 300 }) // Remove the text
    .type('assion.', { delay: 300 }) // Add " with purpose."
    // .move(null, { to: 'END', instant: true }) // Move cursor to the end
    // .type(' with purpose.', { delay: 300 }) // Add " with purpose."
    // .pause(400) // Short pause
    // .move(null, { to: 'END', instant: true, delay: 200 }) // Move cursor to the end
    // .type('.', { delay: 300 }) // Add period
    // .pause(600) // Pause before deleting all text
    .pause(1000) 
    .delete('', { delay: 500 }) // Delete everything
    .type('Let’s code the extraordinary!', { delay: 300 }) 
    .go();
    
    
  }
}
